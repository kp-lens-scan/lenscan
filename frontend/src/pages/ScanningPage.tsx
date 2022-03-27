import Scanning from "../components/Scanning";
import Dendrograms from "../components/Dendrograms";
import { useWeb3React } from "@web3-react/core";
import { EtherSWRConfig } from "ether-swr";
import { getABIs } from "../helpers/Contract";
import config from '../config/config.json';
import ConnectWallet from "../components/ConnectWallet";

const ScanningPage = () => {
  const { active, chainId, library } = useWeb3React();
  return (
    <div className="ScanningPageContainer">
      {active && chainId === config.NETWORK.CHAIN_ID ?
        <EtherSWRConfig
          value={{
            web3Provider: library,
            ABIs: new Map(getABIs([
            ])),
            refreshInterval: 1000
          }}>
          <Scanning />
          <Dendrograms width={400} height={400} />
        </EtherSWRConfig> : <ConnectWallet />
      }
    </div>
  );
}

export default ScanningPage;
