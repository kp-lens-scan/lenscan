import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import { Button, CircularProgress, IconButton, MenuItem, Select, Snackbar, TextareaAutosize, Tooltip } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { getContractByName } from '../helpers/Contract';
import { useWeb3React } from '@web3-react/core';
import { IFormControl } from '../models/Form.models';
import Spinner from './Spinner';
import { IProfile, IPub } from '../models/ContractResponse';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { ethers } from 'ethers';
import Blockies from 'react-blockies';
const LitJsSdk = require("lit-js-sdk");

const Scanning = () => {
  const { library } = useWeb3React();
  const [toggleValue, setToggleValue] = useState<'account' | 'dapp'>('account');
  const [dappSelectValue, setDappSelectValue] = useState('default');
  const [accountTab, setAccountTab] = useState('posts');
  const [dappTab, setDappTab] = useState('tools');
  const [accountControl, setAccountControl] = useState<IFormControl>({
    value: '',
    invalid: true
  });
  const [encryptedControl, setEncryptedControl] = useState<IFormControl>({
    value: '',
    invalid: true
  });
  const [profile, setProfile] = useState<IProfile>();
  const [pubs, setPubs] = useState<Array<IPub>>([]);
  const [scanningAccount, setScanningAccount] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [decryptingData, setDecryptingData] = useState(false);
  const [decryptedData, setDecryptedData] = useState('');
  const [profileHandled, setProfileHandled] = useState('');
  const [accountNotFound, setAccountNotFound] = useState(false);
  const [numFollowers, setNumFollowers] = useState<number>();
  const lensHubProxy = getContractByName('LensHubProxy', library.getSigner());
  const followNFT = getContractByName('FollowNFTImplementation', library.getSigner());
  const [chain] = useState("mumbai");
  let authSig: any;
  let accessControlConditions: {
    contractAddress: string;
    standardContractType: string;
    chain: string;
    method: string;
    parameters: string[];
    returnValueTest: { comparator: string; value: string };
  }[];

  const scanAccount = async () => {
    if (!accountControl.value) {
      return;
    }
    setScanningAccount(true);
    setAccountNotFound(false);
    setAccountTab('posts')
    setPubs([]);
    setProfile(undefined);
    let profileAddress: { username: string; profileId: string };
    let accountScan: string;
    if (ethers.utils.isAddress(accountControl.value)) {
      profileAddress = await getProfile(accountControl.value);
      if (profileAddress?.username) {
        accountScan = profileAddress?.username;
      } else {
        setAccountNotFound(true);
        setScanningAccount(false);
        return;
      }
    } else {
      accountScan = accountControl.value;
    }
    const proId = await lensHubProxy.getProfileIdByHandle(accountScan);
    if (parseFloat(proId) === 0) {
      setAccountNotFound(true);
      setScanningAccount(false);
      return;
    }
    const pubCount = await lensHubProxy.getPubCount(proId);
    if (parseFloat(pubCount) > 0) {
      const pubsTemp = [];
      for (let i = 1; i <= parseFloat(pubCount); i++) {
        const pubR: IPub = await lensHubProxy.getPub(proId, pubCount);
        pubsTemp.push(pubR);
      }
      setPubs(pubsTemp);
    }
    const profileR: IProfile = await lensHubProxy.getProfile(proId);
    const followerNFTAddress = await lensHubProxy.getFollowNFT(proId);
    console.log();
    if (followerNFTAddress === ethers.constants.AddressZero) {
      setNumFollowers(0);
    } else {
      const numFlers = await followNFT.attach(followerNFTAddress).totalSupply();
      setNumFollowers(numFlers);
    }
    setProfile(profileR);
    setProfileHandled(accountControl.value);
    setScanningAccount(false);
  }

  const getProfile = (address: string) => {
    return fetch(`https://lenscan.org/profile?address=${address}`)
      .then((response) => response.json());
  }

  const handleDecrypt = async (fileUrl: string, strfileUrl: string) => {
    setDecryptingData(true);
    authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    accessControlConditions = [
      {
        contractAddress: "0x3c3b99BC9559D39d6dbc3fA4afF6D3373BF53A6f",
        standardContractType: "ERC721",
        chain,
        method: "balanceOf",
        parameters: [":userAddress"],
        returnValueTest: {
          comparator: ">",
          value: "0",
        },
      },
    ];
    const client = new LitJsSdk.LitNodeClient();
    await client.connect();
    (window as any)["litNodeClient"] = client;

    axios.get(fileUrl).then(async (res: any) => {
      const encryptDATA = res["data"];
      axios({
        url: strfileUrl, //your url
        method: 'GET',
        responseType: 'blob'
      })
        .then(async (res: any) => {
          const symmetricKey = await (window as any).litNodeClient.getEncryptionKey({
            accessControlConditions,
            // Note, below we convert the encryptedSymmetricKey from a UInt8Array to a hex string.  This is because we obtained the encryptedSymmetricKey from "saveEncryptionKey" which returns a UInt8Array.  But the getEncryptionKey method expects a hex string.
            toDecrypt: LitJsSdk.uint8arrayToString(
              Uint8Array.from(
                Object.values(encryptDATA["encryptedSymmetricKey"])
              ),
              "base16"
            ),
            chain,
            authSig,
          });
          const decryptedString = await LitJsSdk.decryptString(
            new Blob([res.data]),
            symmetricKey
          );
          setDecryptedData(decryptedString);
          setDecryptingData(false);
        }).catch((e) => {
          setDecryptingData(false);
        });
    });
  };

  return (
    <>
      <div className="ScanningContainer">
        <div className="ScanningSearchContainer">
          <Select className="ScanningSearchSelect" value={toggleValue} onChange={(event) => {
            setToggleValue(event.target.value as any);
          }}>
            <MenuItem value="account">Account</MenuItem>
            <MenuItem value="dapp">Dapp</MenuItem>
          </Select>
          {toggleValue === 'account' ?
            <>
              <TextField className="ScanningSearchInput" placeholder="Enter an account / address to scan" type="text"
                value={accountControl.value}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    scanAccount();
                  }
                }}
                onChange={(e) => {
                  if (e.target.value) {
                    setAccountControl({
                      value: e.target.value,
                      invalid: false
                    });
                  } else {
                    setAccountControl({
                      value: '',
                      invalid: true
                    });
                  }
                }} />
              <Button variant="contained" color="primary" onClick={scanAccount} disabled={accountControl.invalid}>
                <ManageSearchOutlinedIcon />
                <span className="ScanningButtonText">Scan</span>
              </Button>
            </> :
            <>
              <Select value={dappSelectValue} sx={{ width: 300 }} onChange={(event) => {
                setDappSelectValue(event.target.value as any);
              }}>
                <MenuItem value={'default'} disabled>Choose a dapp</MenuItem>
                <MenuItem value={'kittyparty'}>Kitty Party</MenuItem>
              </Select>
            </>
          }
        </div>
        {toggleValue === 'account' ?
          <div className="ScanningDataContainer">
            <div className="ScanningResultsContainer">
              {!scanningAccount ?
                <>
                  {!accountNotFound ?
                    <>
                      {profile &&
                        <div className="ProfileContainer">
                          <Blockies
                            seed={profileHandled}
                            size={10}
                            scale={4}
                          />
                          <span className="ProfileName">{profileHandled}</span>
                          <div className="ProfileFollowInfo">
                            <span>{`${numFollowers} followers`}</span>
                          </div>
                        </div>
                      }
                      <TabContext value={accountTab}>
                        <TabList textColor="primary" onChange={(event, value) => {
                          if (value) {
                            setAccountTab(value);
                          }
                        }}>
                          <Tab label="POSTS" value="posts" />
                        </TabList>
                        <TabPanel value={'posts'}>
                          {pubs.length > 0 ?
                            <div className="PostsContainer">
                              <div className="PostsHeaderContainer">
                                <span className="PostsHeaderPostId">Post ID</span>
                                <span className="PostsHeaderEncryptedContact">Encrypted Contact</span>
                                <div className="PostsHeaderActions"></div>
                              </div>
                              {pubs.map((pub: IPub, index: number) => (
                                <div className="PostsItemContainer" key={index}>
                                  <span className="PostsItemPostId">#{index + 1}</span>
                                  <span className="PostsItemEncryptedContact">{pub?.contentURI}</span>
                                  <div className="PostsItemActions">
                                    <Tooltip title="Copy Encrypted Contact">
                                      <IconButton onClick={() => {
                                        navigator.clipboard.writeText(pub?.contentURI);
                                        setSnackbar(true)
                                      }}>
                                        <ContentCopyOutlinedIcon />
                                      </IconButton>
                                    </Tooltip>
                                  </div>
                                </div>
                              ))}
                            </div> : <span>This handle string has no post!</span>
                          }
                        </TabPanel>
                      </TabContext>
                    </> :
                    <div className="NotFoundContainer">
                      <span>This handle was not found! Are you sure you entered a handle ?</span>
                    </div>
                  }
                </> : <Spinner />
              }
            </div>
          </div> : <></>
        }
        {toggleValue === 'dapp' ?
          <div className="ScanningDataContainer">
            <div className="ScanningResultsContainer">
              <TabContext value={dappTab}>
                <TabList textColor="primary" onChange={(event, value) => {
                  if (value) {
                    setDappTab(value);
                  }
                }}>
                  <Tab label="Tools" value="tools" />
                </TabList>
                <TabPanel value={'tools'}>
                  {dappSelectValue === 'kittyparty' ?
                    <div className="DappToolsContainer">
                      <TextareaAutosize value={encryptedControl.value} className="DappToolsEncryptedData" minRows={3}
                        onChange={(e) => {
                          if (e.target.value) {
                            try {
                              const data = JSON.parse(e.target.value);
                              if (data.fileUrl && data.strfileUrl) {
                                setEncryptedControl({
                                  value: e.target.value,
                                  invalid: false
                                });
                              } else {
                                setEncryptedControl({
                                  value: e.target.value,
                                  invalid: true
                                });
                              }
                            } catch (e2) {
                              setEncryptedControl({
                                value: e.target.value,
                                invalid: true
                              });
                            }
                          } else {
                            setEncryptedControl({
                              value: '',
                              invalid: true
                            });
                          }
                        }} />
                      <Button variant="contained" disabled={!encryptedControl.value || encryptedControl.invalid} onClick={() => {
                        const data = JSON.parse(encryptedControl.value);
                        handleDecrypt(data.fileUrl, data.strfileUrl);
                      }}>Decrypt</Button>
                      {decryptedData && !decryptingData &&
                        <div className="DecryptedContactContainer">
                          <span className="DecryptedContactLabel">Decrypted Contact:</span>
                          <span className="DecryptedContactValue">{decryptedData}</span>
                          <Tooltip title="Copy Contact">
                            <IconButton onClick={() => {
                              navigator.clipboard.writeText(decryptedData);
                              setSnackbar(true);
                            }}>
                              <ContentCopyOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                        </div>
                      }
                      {decryptingData &&
                        <CircularProgress color="secondary" size={40} />
                      }
                    </div> : <></>
                  }
                </TabPanel>
              </TabContext>
            </div>
          </div> : <></>
        }
      </div>
      <Snackbar
        open={snackbar}
        autoHideDuration={6000}
        onClose={() => setSnackbar(false)}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default Scanning;
