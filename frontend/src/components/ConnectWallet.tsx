import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import config from '../config/config.json';
import { Button } from "@mui/material";
import { connectWallet } from "../helpers/Wallet";

const ConnectWallet = () => {
  const { active, activate, chainId } = useWeb3React<Web3Provider>();
  return (
    <div className="ConnectWalletContainer">
      {!active ?
        <Button variant="contained" color="primary" onClick={() => connectWallet(activate)}>Connect Wallet</Button> : <></>
      }
      {active && chainId !== config.NETWORK.CHAIN_ID ?
        <Button variant="contained" color="primary" onClick={
          () => {
            (window as any).ethereum?.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: `0x${config.NETWORK.CHAIN_ID.toString(16)}` }] })
              .then(() => {
              }, () => {
              });
          }
        }>{`Switch to ${config.NETWORK.NAME}`}</Button> : <></>
      }
    </div>
  );
}

export default ConnectWallet;
