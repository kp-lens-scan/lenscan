import Encrypt from "../components/Encrypt";
import { useWeb3React } from "@web3-react/core";
import { EtherSWRConfig } from "ether-swr";
import { getABIs } from "../helpers/Contract";
import config from '../config/config.json';
import ConnectWallet from "../components/ConnectWallet";

const EncryptContentPage = () => {
  const { active, chainId, library } = useWeb3React();
  return (
    <div className="EncryptPageContainer">
      {active && chainId === config.NETWORK.CHAIN_ID ?
        <EtherSWRConfig
          value={{
            web3Provider: library,
            ABIs: new Map(getABIs([
            ])),
            refreshInterval: 1000
          }}>
          <Encrypt />
        </EtherSWRConfig> : <ConnectWallet />
      }
    </div>
  );
}

export default EncryptContentPage;
