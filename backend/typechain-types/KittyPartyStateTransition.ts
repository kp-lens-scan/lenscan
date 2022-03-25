/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface KittyPartyStateTransitionInterface extends utils.Interface {
  functions: {
    "currentRound()": FunctionFragment;
    "durationInDays()": FunctionFragment;
    "getStage()": FunctionFragment;
    "isTransitionRequired()": FunctionFragment;
    "lastStageTime()": FunctionFragment;
    "numberOfRounds()": FunctionFragment;
    "stage()": FunctionFragment;
    "timeSinceChange()": FunctionFragment;
    "timeToCollection()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "currentRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "durationInDays",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getStage", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isTransitionRequired",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastStageTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfRounds",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stage", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "timeSinceChange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timeToCollection",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "currentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "durationInDays",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTransitionRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastStageTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfRounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "timeSinceChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeToCollection",
    data: BytesLike
  ): Result;

  events: {
    "Completed()": EventFragment;
    "StageTransition(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Completed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StageTransition"): EventFragment;
}

export type CompletedEvent = TypedEvent<[], {}>;

export type CompletedEventFilter = TypedEventFilter<CompletedEvent>;

export type StageTransitionEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { party: string; prevStage: BigNumber; nextStage: BigNumber }
>;

export type StageTransitionEventFilter = TypedEventFilter<StageTransitionEvent>;

export interface KittyPartyStateTransition extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KittyPartyStateTransitionInterface;

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
    currentRound(overrides?: CallOverrides): Promise<[number]>;

    durationInDays(overrides?: CallOverrides): Promise<[number]>;

    getStage(overrides?: CallOverrides): Promise<[BigNumber]>;

    isTransitionRequired(overrides?: CallOverrides): Promise<[number]>;

    lastStageTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    numberOfRounds(overrides?: CallOverrides): Promise<[number]>;

    stage(overrides?: CallOverrides): Promise<[number]>;

    timeSinceChange(overrides?: CallOverrides): Promise<[BigNumber]>;

    timeToCollection(overrides?: CallOverrides): Promise<[number]>;
  };

  currentRound(overrides?: CallOverrides): Promise<number>;

  durationInDays(overrides?: CallOverrides): Promise<number>;

  getStage(overrides?: CallOverrides): Promise<BigNumber>;

  isTransitionRequired(overrides?: CallOverrides): Promise<number>;

  lastStageTime(overrides?: CallOverrides): Promise<BigNumber>;

  numberOfRounds(overrides?: CallOverrides): Promise<number>;

  stage(overrides?: CallOverrides): Promise<number>;

  timeSinceChange(overrides?: CallOverrides): Promise<BigNumber>;

  timeToCollection(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    currentRound(overrides?: CallOverrides): Promise<number>;

    durationInDays(overrides?: CallOverrides): Promise<number>;

    getStage(overrides?: CallOverrides): Promise<BigNumber>;

    isTransitionRequired(overrides?: CallOverrides): Promise<number>;

    lastStageTime(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfRounds(overrides?: CallOverrides): Promise<number>;

    stage(overrides?: CallOverrides): Promise<number>;

    timeSinceChange(overrides?: CallOverrides): Promise<BigNumber>;

    timeToCollection(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "Completed()"(): CompletedEventFilter;
    Completed(): CompletedEventFilter;

    "StageTransition(address,uint256,uint256)"(
      party?: null,
      prevStage?: null,
      nextStage?: null
    ): StageTransitionEventFilter;
    StageTransition(
      party?: null,
      prevStage?: null,
      nextStage?: null
    ): StageTransitionEventFilter;
  };

  estimateGas: {
    currentRound(overrides?: CallOverrides): Promise<BigNumber>;

    durationInDays(overrides?: CallOverrides): Promise<BigNumber>;

    getStage(overrides?: CallOverrides): Promise<BigNumber>;

    isTransitionRequired(overrides?: CallOverrides): Promise<BigNumber>;

    lastStageTime(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfRounds(overrides?: CallOverrides): Promise<BigNumber>;

    stage(overrides?: CallOverrides): Promise<BigNumber>;

    timeSinceChange(overrides?: CallOverrides): Promise<BigNumber>;

    timeToCollection(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    currentRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    durationInDays(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTransitionRequired(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastStageTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberOfRounds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timeSinceChange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timeToCollection(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
