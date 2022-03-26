import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button, Card, CardContent, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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

const Scanning = () => {
  const { active, chainId, activate, library } = useWeb3React();
  const [toggleValue, setToggleValue] = useState<'account' | 'dapp'>('account');
  const [accountTab, setAccountTab] = useState<'posts' | 'investments' | 'communities' | 'nfts'>('posts');
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
  const [profile, setProfile] = useState<IProfile>();
  const [pubs, setPubs] = useState<Array<IPub>>([]);
  const [scanningAccount, setScanningAccount] = useState(false);
  const [accountNotFound, setAccountNotFound] = useState(false);
  const lensHubProxy = getContractByName('LensHubProxy', library.getSigner());

  const scanAccount = async () => {
    setScanningAccount(true);
    setAccountNotFound(false);
    setPubs([]);
    setProfile(undefined);
    const proId = await lensHubProxy.getProfileIdByHandle(accountControl.value);
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
    console.log(followers)
    setScanningAccount(false);
  }

  return (
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
            <TextField className="ScanningSearchInput" placeholder="Enter a handle string to scan" type="text"
              value={accountControl.value}
              onKeyUp={(e) => {
                if (e.key === 'Enter' || e.keyCode === 13) {
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
            <Autocomplete
              disablePortal
              options={dappList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} placeholder="Choose a dapp to scan" />}
            />
            <Button variant="contained" color="primary">
              <ManageSearchOutlinedIcon />
              <span className="ScanningButtonText">Scan</span>
            </Button>
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
                          <TableContainer>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell>Post ID</TableCell>
                                  <TableCell>Post URI</TableCell>
                                  <TableCell></TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {pubs.map((pub: IPub, index: number) => (
                                  <TableRow key={index}>
                                    <TableCell scope="row">
                                      #{index + 1}
                                    </TableCell>
                                    <TableCell>
                                      <span className="PostContentURI" onClick={() => {
                                        window.open(pub?.contentURI, '_blank');
                                      }}>{pub?.contentURI}</span>
                                    </TableCell>
                                    <TableCell>
                                      <Button variant="contained" color="secondary" onClick={() => {
                                        window.open(pub?.contentURI, '_blank');
                                      }}>View</Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer> : <span>This handle string has no post!</span>
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
            <TabContext value={accountTab}>
              <TabList textColor="primary" onChange={(event, value) => {
                if (value) {
                  setAccountTab(value);
                }
              // eslint-disable-next-line react/jsx-no-comment-textnodes
              }}>
                // Here we need get the DAO creator contract address and then find all the profiles linked to this DAO
                <Tab label="POSTS" value="posts" />
                <Tab label="Tools" value="tools" />
              </TabList>
              <TabPanel value={'posts'}>
                
              </TabPanel>
              <TabPanel value={'tools'}>
              <TextField id="outlined-basic" label="Contract Address" variant="outlined" />
              <Card variant="outlined"><CardContent>ERC721 balance Of</CardContent></Card>
              <Card variant="outlined">ERC1155  balance Of</Card>
              <Card variant="outlined">ERC20  balance Of</Card>

                </TabPanel>
            </TabContext>
          </div>
        </div> : <></>
      }
    </div>
  );
}

export default Scanning;
