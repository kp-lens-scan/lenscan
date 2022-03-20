import { injectedConnector } from "./Networks";
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from "@ethersproject/providers";

export const connectWallet = (activate: any) => {
  activate(injectedConnector);
}

export const getWeb3Provider = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 3000;
  return library;
}

export const shorterAddress = (str: string | null | undefined) => str && str.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str;

export const getAaveDaiRate = (liquidityRate: number): string => {
  const RAY = 10 ** 27;
  const SECONDS_PER_YEAR = 31536000;
  const depositAPR = liquidityRate / RAY;
  const depositAPY = ((1 + (depositAPR / SECONDS_PER_YEAR)) ** SECONDS_PER_YEAR) - 1;
  return `${(depositAPY * 100).toFixed(2)}%`;
}
