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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface KittyPartyTreasuryInterface extends utils.Interface {
  functions: {
    "__KittyPartyTreasury_init(address,address,address,address)": FunctionFragment;
    "accountantContract()": FunctionFragment;
    "bonusKPTPerToken()": FunctionFragment;
    "dai()": FunctionFragment;
    "daoAddress()": FunctionFragment;
    "kpt()": FunctionFragment;
    "redeemTokens(uint256)": FunctionFragment;
    "setAccountant(address)": FunctionFragment;
    "setBonusKPT(uint256)": FunctionFragment;
    "setDAOAddress(address)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "__KittyPartyTreasury_init",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "accountantContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bonusKPTPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "dai", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "daoAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kpt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeemTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAccountant",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBonusKPT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDAOAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "__KittyPartyTreasury_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountantContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bonusKPTPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kpt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAccountant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBonusKPT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDAOAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "RedemptionRequested(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RedemptionRequested"): EventFragment;
}

export type RedemptionRequestedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { redeemer: string; amount: BigNumber; bonus: BigNumber }
>;

export type RedemptionRequestedEventFilter =
  TypedEventFilter<RedemptionRequestedEvent>;

export interface KittyPartyTreasury extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KittyPartyTreasuryInterface;

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
    __KittyPartyTreasury_init(
      _dai_address: string,
      _kpt_address: string,
      _daoAddress: string,
      _accountantContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    accountantContract(overrides?: CallOverrides): Promise<[string]>;

    bonusKPTPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    dai(overrides?: CallOverrides): Promise<[string]>;

    daoAddress(overrides?: CallOverrides): Promise<[string]>;

    kpt(overrides?: CallOverrides): Promise<[string]>;

    redeemTokens(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAccountant(
      _accountantContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBonusKPT(
      _amountToReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDAOAddress(
      _daoAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  __KittyPartyTreasury_init(
    _dai_address: string,
    _kpt_address: string,
    _daoAddress: string,
    _accountantContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  accountantContract(overrides?: CallOverrides): Promise<string>;

  bonusKPTPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  dai(overrides?: CallOverrides): Promise<string>;

  daoAddress(overrides?: CallOverrides): Promise<string>;

  kpt(overrides?: CallOverrides): Promise<string>;

  redeemTokens(
    redeemAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAccountant(
    _accountantContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBonusKPT(
    _amountToReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDAOAddress(
    _daoAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    __KittyPartyTreasury_init(
      _dai_address: string,
      _kpt_address: string,
      _daoAddress: string,
      _accountantContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    accountantContract(overrides?: CallOverrides): Promise<string>;

    bonusKPTPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    dai(overrides?: CallOverrides): Promise<string>;

    daoAddress(overrides?: CallOverrides): Promise<string>;

    kpt(overrides?: CallOverrides): Promise<string>;

    redeemTokens(
      redeemAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAccountant(
      _accountantContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBonusKPT(
      _amountToReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDAOAddress(
      _daoAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RedemptionRequested(address,uint256,uint256)"(
      redeemer?: null,
      amount?: null,
      bonus?: null
    ): RedemptionRequestedEventFilter;
    RedemptionRequested(
      redeemer?: null,
      amount?: null,
      bonus?: null
    ): RedemptionRequestedEventFilter;
  };

  estimateGas: {
    __KittyPartyTreasury_init(
      _dai_address: string,
      _kpt_address: string,
      _daoAddress: string,
      _accountantContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    accountantContract(overrides?: CallOverrides): Promise<BigNumber>;

    bonusKPTPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    dai(overrides?: CallOverrides): Promise<BigNumber>;

    daoAddress(overrides?: CallOverrides): Promise<BigNumber>;

    kpt(overrides?: CallOverrides): Promise<BigNumber>;

    redeemTokens(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAccountant(
      _accountantContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBonusKPT(
      _amountToReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDAOAddress(
      _daoAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    __KittyPartyTreasury_init(
      _dai_address: string,
      _kpt_address: string,
      _daoAddress: string,
      _accountantContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    accountantContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bonusKPTPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dai(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kpt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemTokens(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAccountant(
      _accountantContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBonusKPT(
      _amountToReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDAOAddress(
      _daoAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}