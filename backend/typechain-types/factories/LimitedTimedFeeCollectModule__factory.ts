/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LimitedTimedFeeCollectModule,
  LimitedTimedFeeCollectModuleInterface,
} from "../LimitedTimedFeeCollectModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
      {
        internalType: "address",
        name: "moduleGlobals",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CollectExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MintLimitExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "ModuleDataMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHub",
    type: "error",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MODULE_GLOBALS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
    ],
    name: "getPublicationData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "collectLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentCollects",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "referralFee",
            type: "uint16",
          },
          {
            internalType: "uint40",
            name: "endTimestamp",
            type: "uint40",
          },
        ],
        internalType: "struct ProfilePublicationData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializePublicationCollectModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "referrerProfileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processCollect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051620014bf380380620014bf8339810160408190526100319161012a565b81816001600160a01b03811661005a576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527f4e84a529f4c627b5e787037d117873af1018768804cca3c7f0d47041fe2c89ed9060200160405180910390a2506001600160a01b0381166100c4576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660a08190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250505061015d565b80516001600160a01b038116811461012557600080fd5b919050565b6000806040838503121561013d57600080fd5b6101468361010e565b91506101546020840161010e565b90509250929050565b60805160a05161130b620001b4600039600081816101e60152818161024a01528181610507015281816106e0015281816107e00152610ac50152600081816101a7015281816106540152610c02015261130b6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633f5038921461005c57806388ffe851146101a2578063a4c52b86146101e1578063c233f95114610208578063e49c3dda14610228575b600080fd5b61012a61006a366004610f26565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091525060009182526020828152604080842092845291815291819020815160e0810183528154815260018201549381019390935260028101549183019190915260038101546001600160a01b0390811660608401526004909101549081166080830152600160a01b810461ffff1660a0830152600160b01b900464ffffffffff1660c082015290565b6040516101999190600060e082019050825182526020830151602083015260408301516040830152606083015160018060a01b038082166060850152806080860151166080850152505061ffff60a08401511660a083015264ffffffffff60c08401511660c083015292915050565b60405180910390f35b6101c97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610199565b6101c97f000000000000000000000000000000000000000000000000000000000000000081565b61021b610216366004610f91565b61023d565b604051610199919061103c565b61023b610236366004611067565b6104fc565b005b6060336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610288576040516313bd2e8360e31b815260040160405180910390fd5b600061029762015180426110f0565b90506000808080806102ab888a018a611129565b9450945094509450945084600014806102ca57506102c883610632565b155b806102dc57506001600160a01b038216155b806102ec575061271061ffff8216115b806102f8575061271084105b15610316576040516348be0eb360e01b815260040160405180910390fd5b846000808d815260200190815260200160002060008c815260200190815260200160002060000181905550836000808d815260200190815260200160002060008c815260200190815260200160002060020181905550826000808d815260200190815260200160002060008c815260200190815260200160002060030160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000808d815260200190815260200160002060008c815260200190815260200160002060040160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550806000808d815260200190815260200160002060008c815260200190815260200160002060040160146101000a81548161ffff021916908361ffff160217905550856000808d815260200190815260200160002060008c815260200190815260200160002060040160166101000a81548164ffffffffff021916908364ffffffffff16021790555084848484848a6040516020016104dd9695949392919095865260208601949094526001600160a01b0392831660408601529116606084015261ffff16608083015264ffffffffff1660a082015260c00190565b6040516020818303038152906040529650505050505050949350505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610545576040516313bd2e8360e31b815260040160405180910390fd5b61054f84866106c7565b600084815260208181526040808320868452909152902060040154600160b01b900464ffffffffff1642811015610599576040516304cd703960e51b815260040160405180910390fd5b60008581526020818152604080832087845290915290208054600190910154106105d657604051635b21dfd360e11b815260040160405180910390fd5b60008581526020818152604080832087845290915281206001018054916105fc83611188565b91905055508487141561061b57610616868686868661090a565b610629565b6106298787878787876109dc565b50505050505050565b6040516343b938c560e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906343b938c590602401602060405180830381865afa15801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c191906111a3565b92915050565b604051633648f48360e21b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d923d20c90602401602060405180830381865afa15801561072f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075391906111c5565b90506001600160a01b038116156107c757604051635a30b51560e11b8152600481018490526001600160a01b0383811660248301526000604483015282169063b4616a2a9060640160006040518083038186803b1580156107b357600080fd5b505afa158015610629573d6000803e3d6000fd5b60405163a9ec656360e01b8152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ec656390602401602060405180830381865afa15801561082f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085391906111c5565b90506001600160a01b03811661087c57604051636992d36b60e11b815260040160405180910390fd5b6040516370a0823160e01b81526001600160a01b0384811660048301528216906370a0823190602401602060405180830381865afa1580156108c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e691906111e2565b61090357604051636992d36b60e11b815260040160405180910390fd5b505b505050565b600084815260208181526040808320868452909152902060028101546003909101546001600160a01b031661094184848385610ba3565b60008061094c610bfd565b60008a8152602081815260408083208c84529091528120600401549294509092506001600160a01b039091169061271061098a61ffff8516886111fb565b610994919061121a565b905060006109a2828861123c565b90506109b96001600160a01b0387168d8584610c89565b6109ce6001600160a01b0387168d8785610c89565b505050505050505050505050565b600084815260208181526040808320868452909152902060028101546003909101546001600160a01b0316610a1384848385610ba3565b600086815260208181526040808320888452909152812060040154600160a01b900461ffff16908080610a44610bfd565b9093509050612710610a5a61ffff8316886111fb565b610a64919061121a565b915060009050610a74828761123c565b90508315610b4a576000612710610a8b86846111fb565b610a95919061121a565b9050610aa1818361123c565b6040516331a9108f60e11b8152600481018f90529092506000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636352211e90602401602060405180830381865afa158015610b0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3091906111c5565b9050610b476001600160a01b0388168e8385610c89565b50505b60008a8152602081815260408083208c84529091529020600401546001600160a01b0390811690610b7f9087168d8385610c89565b610b946001600160a01b0387168d8686610c89565b50505050505050505050505050565b600080610bb285870187611253565b915091508281141580610bd75750836001600160a01b0316826001600160a01b031614155b15610bf5576040516346308bd560e01b815260040160405180910390fd5b505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166398f965d16040518163ffffffff1660e01b81526004016040805180830381865afa158015610c5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c81919061127f565b915091509091565b604080516001600160a01b038581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180516001600160e01b03166323b872dd60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261090392879291600091610d21918516908490610da3565b8051909150156109055780806020019051810190610d3f91906111a3565b6109055760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6060610db28484600085610dbc565b90505b9392505050565b606082471015610e1d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610d9a565b6001600160a01b0385163b610e745760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610d9a565b600080866001600160a01b03168587604051610e9091906112b9565b60006040518083038185875af1925050503d8060008114610ecd576040519150601f19603f3d011682016040523d82523d6000602084013e610ed2565b606091505b5091509150610ee2828286610eed565b979650505050505050565b60608315610efc575081610db5565b825115610f0c5782518084602001fd5b8160405162461bcd60e51b8152600401610d9a919061103c565b60008060408385031215610f3957600080fd5b50508035926020909101359150565b60008083601f840112610f5a57600080fd5b50813567ffffffffffffffff811115610f7257600080fd5b602083019150836020828501011115610f8a57600080fd5b9250929050565b60008060008060608587031215610fa757600080fd5b8435935060208501359250604085013567ffffffffffffffff811115610fcc57600080fd5b610fd887828801610f48565b95989497509550505050565b60005b83811015610fff578181015183820152602001610fe7565b838111156109035750506000910152565b60008151808452611028816020860160208601610fe4565b601f01601f19169290920160200192915050565b602081526000610db56020830184611010565b6001600160a01b038116811461106457600080fd5b50565b60008060008060008060a0878903121561108057600080fd5b8635955060208701356110928161104f565b94506040870135935060608701359250608087013567ffffffffffffffff8111156110bc57600080fd5b6110c889828a01610f48565b979a9699509497509295939492505050565b634e487b7160e01b600052601160045260246000fd5b600064ffffffffff808316818516808303821115611110576111106110da565b01949350505050565b61ffff8116811461106457600080fd5b600080600080600060a0868803121561114157600080fd5b8535945060208601359350604086013561115a8161104f565b9250606086013561116a8161104f565b9150608086013561117a81611119565b809150509295509295909350565b600060001982141561119c5761119c6110da565b5060010190565b6000602082840312156111b557600080fd5b81518015158114610db557600080fd5b6000602082840312156111d757600080fd5b8151610db58161104f565b6000602082840312156111f457600080fd5b5051919050565b6000816000190483118215151615611215576112156110da565b500290565b60008261123757634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561124e5761124e6110da565b500390565b6000806040838503121561126657600080fd5b82356112718161104f565b946020939093013593505050565b6000806040838503121561129257600080fd5b825161129d8161104f565b60208401519092506112ae81611119565b809150509250929050565b600082516112cb818460208701610fe4565b919091019291505056fea2646970667358221220d108a438b36d564ce15e5006b3a7b0bd47c4b6e52f27da593ee089fd418e6d9064736f6c634300080a0033";

type LimitedTimedFeeCollectModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LimitedTimedFeeCollectModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LimitedTimedFeeCollectModule__factory extends ContractFactory {
  constructor(...args: LimitedTimedFeeCollectModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    moduleGlobals: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LimitedTimedFeeCollectModule> {
    return super.deploy(
      hub,
      moduleGlobals,
      overrides || {}
    ) as Promise<LimitedTimedFeeCollectModule>;
  }
  getDeployTransaction(
    hub: string,
    moduleGlobals: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, moduleGlobals, overrides || {});
  }
  attach(address: string): LimitedTimedFeeCollectModule {
    return super.attach(address) as LimitedTimedFeeCollectModule;
  }
  connect(signer: Signer): LimitedTimedFeeCollectModule__factory {
    return super.connect(signer) as LimitedTimedFeeCollectModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LimitedTimedFeeCollectModuleInterface {
    return new utils.Interface(_abi) as LimitedTimedFeeCollectModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LimitedTimedFeeCollectModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LimitedTimedFeeCollectModule;
  }
}
