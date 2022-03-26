/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KittyPartyWinnerSelectionOptions,
  KittyPartyWinnerSelectionOptionsInterface,
} from "../KittyPartyWinnerSelectionOptions";

const _abi = [
  {
    inputs: [],
    name: "winnerStrategy",
    outputs: [
      {
        internalType: "enum KittyPartyWinnerSelectionOptions.WinningStrategy",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916600217905534801561001d57600080fd5b5060aa8061002c6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636f71462514602d575b600080fd5b60005460399060ff1681565b60405160449190604d565b60405180910390f35b6020810160058310606e57634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220146f853d778c89d016b4d0e1d6295f2e1cab53f5a79737a2f4ffb2e20524099364736f6c634300080a0033";

type KittyPartyWinnerSelectionOptionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KittyPartyWinnerSelectionOptionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KittyPartyWinnerSelectionOptions__factory extends ContractFactory {
  constructor(...args: KittyPartyWinnerSelectionOptionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KittyPartyWinnerSelectionOptions> {
    return super.deploy(
      overrides || {}
    ) as Promise<KittyPartyWinnerSelectionOptions>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KittyPartyWinnerSelectionOptions {
    return super.attach(address) as KittyPartyWinnerSelectionOptions;
  }
  connect(signer: Signer): KittyPartyWinnerSelectionOptions__factory {
    return super.connect(signer) as KittyPartyWinnerSelectionOptions__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KittyPartyWinnerSelectionOptionsInterface {
    return new utils.Interface(
      _abi
    ) as KittyPartyWinnerSelectionOptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KittyPartyWinnerSelectionOptions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as KittyPartyWinnerSelectionOptions;
  }
}