import logoImg from '../assets/images/lens-logo.svg';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { useWeb3React } from '@web3-react/core';
import { connectWallet } from '../helpers/Wallet';
import Account from './Account';
import { EtherSWRConfig } from 'ether-swr';
import config from '../config/config.json';
import { getABIs } from '../helpers/Contract';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { Tooltip } from '@mui/material';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';

const Header = () => {
  const { active, chainId, activate, library } = useWeb3React();

  useEffect(() => {
    const checkConnection = async () => {
      if ((window as any).ethereum) {
        const provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );
        const addresses = await provider.listAccounts();
        if (addresses && addresses.length > 0) {
          connectWallet(activate);
        }
      }
    };
    checkConnection();
  }, [activate]);
  return (
    <div className="HeaderContainer">
      <img className="LogoImage" src={logoImg} alt="" />
      <div className="HeaderRightSideContainer">
        {active && chainId === config.NETWORK.CHAIN_ID ?
          <EtherSWRConfig
            value={{
              web3Provider: library,
              ABIs: new Map(getABIs([
              ])),
              refreshInterval: 1000
            }}>
            <Account />
          </EtherSWRConfig> :
          <>
            {active && chainId !== config.NETWORK.CHAIN_ID ?
              <Tooltip title={`Switch to ${config.NETWORK.NAME}`}>
                <IconButton size="large" onClick={
                  () => {
                    (window as any).ethereum?.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: `0x${config.NETWORK.CHAIN_ID.toString(16)}` }] })
                      .then(() => {
                      }, () => {
                      });
                  }
                }>
                  <ChangeCircleOutlinedIcon fontSize="inherit" />
                </IconButton>
              </Tooltip> :
              <Tooltip title="Connect wallet">
                <IconButton size="large" onClick={() => connectWallet(activate)}>
                  <LoginIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            }
          </>
        }
      </div>
    </div>
  );
}

export default Header;
