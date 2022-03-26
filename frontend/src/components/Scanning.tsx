import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Button, Card, CardContent, IconButton, MenuItem, Select, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize, Tooltip } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
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
import MuiAlert from '@mui/material/Alert';
import { ethers } from 'ethers';
const Alert = React.forwardRef(function Alert(props, ref: any) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Scanning = () => {
  const { library } = useWeb3React();
  const [toggleValue, setToggleValue] = useState<'account' | 'dapp'>('account');
  const [dappSelectValue, setDappSelectValue] = useState('default');
  const [accountTab, setAccountTab] = useState<'posts' | 'investments' | 'communities' | 'nfts'>('posts');
  const [dappTab, setDappTab] = useState('tools');
  const dappList = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Kitty Party',
      value: 'kittyparty'
    }
  ];
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
  const [accountNotFound, setAccountNotFound] = useState(false);
  const lensHubProxy = getContractByName('LensHubProxy', library.getSigner());

  const scanAccount = async () => {
    if (!accountControl.value) {
      return;
    }
    setScanningAccount(true);
    setAccountNotFound(false);
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
    setProfile(profileR);
    const followers = await lensHubProxy.getFollowNFT(proId);
    setScanningAccount(false);
  }

  const getProfile = (address: string) => {
    return fetch(`https://lenscan.org/profile?address=${address}`)
      .then((response) => response.json());
  }

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
                <MenuItem value={'all'}>All</MenuItem>
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
                      <div className="ProfileContainer">
                        <span className="ProfileLabel">Handle string:</span>
                        <span className="ProfileName">{profile?.handle}</span>
                      </div>
                      <TabContext value={accountTab}>
                        <TabList textColor="primary" onChange={(event, value) => {
                          if (value) {
                            setAccountTab(value);
                          }
                        }}>
                          <Tab label="POSTS" value="posts" />
                          <Tab label="FOLLOWERS" value="followers" />
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
                        <TabPanel value={'followers'}>
                          Item Two
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
                  {dappSelectValue === 'all' || dappSelectValue === 'kittyparty' ?
                    <div className="DappToolsContainer">
                      <TextareaAutosize value={encryptedControl.value} className="DappToolsEncryptedData" minRows={3}
                        onChange={(e) => {
                          if (e.target.value) {
                            setEncryptedControl({
                              value: e.target.value,
                              invalid: false
                            });
                          } else {
                            setEncryptedControl({
                              value: '',
                              invalid: true
                            });
                          }
                        }} />
                      <Button variant="contained" disabled={!encryptedControl.value || encryptedControl.invalid}>Decrypt</Button>
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
