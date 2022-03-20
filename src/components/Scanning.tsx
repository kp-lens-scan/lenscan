import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';

const Scanning = () => {
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
  ]
  return (
    <div className="ScanningContainer">
      <ToggleButtonGroup
        value={toggleValue}
        onChange={(event, value) => {
          if (value) {
            setToggleValue(value);
          }
        }}
        exclusive
      >
        <ToggleButton value="account">Account</ToggleButton>
        <ToggleButton value="dapp">Dapp</ToggleButton>
      </ToggleButtonGroup>
      {toggleValue === 'account' ?
        <div className="ScanningDataContainer">
          <TextField fullWidth className="ScanningAccountInput" placeholder="Enter an account to scan" />
          <Button variant="contained" color="primary">Start Scan</Button>
          <div className="ScanningResultsContainer">
            <div className="AccountRatingContainer">
              <span className="AccountRatingLabel">Account Rating:</span>
              <span className="AccountRatingValue CompletedColor">Good</span>
            </div>
            <TabContext value={accountTab}>
              <TabList textColor="secondary" onChange={(event, value) => {
                if (value) {
                  setAccountTab(value);
                }
              }}>
                <Tab label="POSTS" value="posts" />
                <Tab label="INVESTMENTS" value="investments" />
                <Tab label="COMMUNITIES" value="communities" />
                <Tab label="NFTS" value="nfts" />
              </TabList>
              <TabPanel value={'posts'}>
                Item One
              </TabPanel>
              <TabPanel value={'investments'}>
                Item Two
              </TabPanel>
              <TabPanel value={'communities'}>
                Item Three
              </TabPanel>
              <TabPanel value={'nfts'}>
                Item Four
              </TabPanel>
            </TabContext>
          </div>
        </div> : <></>
      }
      {toggleValue === 'dapp' ?
        <div className="ScanningDataContainer">
          <Autocomplete
            disablePortal
            options={dappList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} placeholder="Choose a dapp to scan" />}
          />
          <Button variant="contained" color="primary">Start Scan</Button>
          <div className="ScanningResultsContainer">
            <div className="AccountRatingContainer">
              <span className="AccountRatingLabel">Account Rating:</span>
              <span className="AccountRatingValue CompletedColor">Good</span>
            </div>
            <TabContext value={accountTab}>
              <TabList textColor="secondary" onChange={(event, value) => {
                if (value) {
                  setAccountTab(value);
                }
              }}>
                <Tab label="POSTS" value="posts" />
                <Tab label="INVESTMENTS" value="investments" />
                <Tab label="COMMUNITIES" value="communities" />
                <Tab label="NFTS" value="nfts" />
              </TabList>
              <TabPanel value={'posts'}>
                Item One
              </TabPanel>
              <TabPanel value={'investments'}>
                Item Two
              </TabPanel>
              <TabPanel value={'communities'}>
                Item Three
              </TabPanel>
              <TabPanel value={'nfts'}>
                Item Four
              </TabPanel>
            </TabContext>
          </div>
        </div> : <></>
      }
    </div>
  );
}

export default Scanning;
