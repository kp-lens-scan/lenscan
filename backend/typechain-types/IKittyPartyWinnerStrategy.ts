/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IKittyPartyWinnerStrategyInterface extends utils.Interface {
  functions: {
    "getLength()": FunctionFragment;
    "getWinnerAtLocation(uint256)": FunctionFragment;
    "getWinners()": FunctionFragment;
    "initiateCheckWinner(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getLength", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getWinnerAtLocation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWinners",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initiateCheckWinner",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWinnerAtLocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getWinners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateCheckWinner",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IKittyPartyWinnerStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKittyPartyWinnerStrategyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getWinnerAtLocation(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWinners(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    initiateCheckWinner(
      _numberOfKittens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getLength(overrides?: CallOverrides): Promise<BigNumber>;

  getWinnerAtLocation(
    i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWinners(overrides?: CallOverrides): Promise<BigNumber[]>;

  initiateCheckWinner(
    _numberOfKittens: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getLength(overrides?: CallOverrides): Promise<BigNumber>;

    getWinnerAtLocation(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWinners(overrides?: CallOverrides): Promise<BigNumber[]>;

    initiateCheckWinner(
      _numberOfKittens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getLength(overrides?: CallOverrides): Promise<BigNumber>;

    getWinnerAtLocation(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWinners(overrides?: CallOverrides): Promise<BigNumber>;

    initiateCheckWinner(
      _numberOfKittens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWinnerAtLocation(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWinners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initiateCheckWinner(
      _numberOfKittens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
