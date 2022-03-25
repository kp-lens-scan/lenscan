import { useWeb3React } from "@web3-react/core";
import { formatEther } from '@ethersproject/units';
import { Web3Provider } from '@ethersproject/providers';
import useEtherSWR from 'ether-swr';
import { useEffect, useState } from 'react';
import { ChainList } from '../helpers/Networks';
import { shorterAddress } from '../helpers/Wallet';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import config from '../config/config.json';

const Account = () => {
  const { account, deactivate, chainId } = useWeb3React<Web3Provider>();
  const { data: balance } = useEtherSWR(['getBalance', account, 'latest']);
  const [symbol, setSymbol] = useState<string>('');

  useEffect(() => {
    if (chainId) {
      Object.entries(ChainList).forEach(item => {
        if (item[1].chainId === chainId) {
          setSymbol(item[1].symbol);
        }
      });
    }
  }, [chainId]);

  return (
    <div className="AccountContainer">
      <span className="AccountNetworkName">{config.NETWORK.NAME}</span>
      <div className="AccountInfoContainer">
        <span className="AccountBalanceText">{`${(typeof balance !== 'undefined' ? parseFloat(formatEther(balance)).toFixed(3) : 0)} ${symbol}`}</span>
        <span className="AccountAddressText">{shorterAddress(account)}</span>
      </div>
      <IconButton size="large" onClick={() => deactivate()}>
        <LogoutIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default Account;
