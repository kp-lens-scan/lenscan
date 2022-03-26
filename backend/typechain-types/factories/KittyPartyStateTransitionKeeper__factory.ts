/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KittyPartyStateTransitionKeeper,
  KittyPartyStateTransitionKeeperInterface,
} from "../KittyPartyStateTransitionKeeper";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SETTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "kpController",
        type: "address",
      },
    ],
    name: "addKPController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLength",
    outputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "kpControllers",
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
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeKPController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_blockInterval",
        type: "uint8",
      },
    ],
    name: "setBlockInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052601460015534801561001557600080fd5b50610021600033610050565b61004b7f61c92169ef077349011ff0b1383c894d86c5f0b41d986366b58a6cf31e93beda33610050565b6100fc565b61005a828261005e565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661005a576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100b83390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6110e18061010b6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636e04ff0d11610097578063be1c766b11610066578063be1c766b1461021d578063cdc5775714610225578063d547741f14610238578063db0761941461024b57600080fd5b80636e04ff0d146101cc57806391d14854146101ed578063a2011b3f14610200578063a217fddf1461021557600080fd5b80632f2ff15d116100d35780632f2ff15d146101685780632ff0186a1461017b57806336568abe146101a65780634585e33b146101b957600080fd5b806301ffc9a7146100fa578063034706a614610122578063248a9ca314610137575b600080fd5b61010d610108366004610cc9565b61025e565b60405190151581526020015b60405180910390f35b610135610130366004610cf3565b610295565b005b61015a610145366004610cf3565b60009081526020819052604090206001015490565b604051908152602001610119565b610135610176366004610d24565b6102bb565b61018e610189366004610cf3565b6102e6565b6040516001600160a01b039091168152602001610119565b6101356101b4366004610d24565b610310565b6101356101c7366004610d54565b61038f565b6101df6101da366004610d54565b61068c565b604051610119929190610e22565b61010d6101fb366004610d24565b610840565b61015a60008051602061108c83398151915281565b61015a600081565b60035461015a565b610135610233366004610e54565b610869565b610135610246366004610d24565b61088b565b610135610259366004610e71565b6108b1565b60006001600160e01b03198216637965db0b60e01b148061028f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008051602061108c8339815191526102ae813361091d565b6102b782610981565b5050565b6000828152602081905260409020600101546102d7813361091d565b6102e18383610a3d565b505050565b600381815481106102f657600080fd5b6000918252602090912001546001600160a01b0316905081565b6001600160a01b03811633146103855760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6102b78282610ac1565b6000808061039f84860186610e8e565b925092509250600254600014156103b557436002555b606060ff84166103ee57506040805160048152602481019091526020810180516001600160e01b0316633453a35960e11b179052610619565b8360ff166001141561042957506040805160048152602481019091526020810180516001600160e01b031663784bf8a760e11b179052610619565b8360ff16600214156104865750604080516004808252602482018352602080830180516001600160e01b03166302a8593360e11b1790526001600160a01b038616600090815291905291909120805460ff19166001179055610619565b8360ff1660581480156104b357506001600160a01b03831660009081526004602052604090205460ff1615155b1561059f576001600160a01b03831660009081526004602052604090205460ff166001141561052d5750604080516004808252602482018352602080830180516001600160e01b0316630eb5a9a560e41b1790526001600160a01b038616600090815291905291909120805460ff19166002179055610619565b6001600160a01b03831660009081526004602052604090205460ff166002141561059a5750604080516004808252602482018352602080830180516001600160e01b0316620c044f60e41b1790526001600160a01b038616600090815291905291909120805460ff191690555b610619565b8360ff16600314156105da57506040805160048152602481019091526020810180516001600160e01b0316630f0f331160e21b179052610619565b8360ff166004141561061957506040805160048152602481019091526020810180516001600160e01b031663030f1e1160e21b17905261061982610981565b6000836001600160a01b0316826040516106339190610ecf565b6000604051808303816000865af19150503d8060008114610670576040519150601f19603f3d011682016040523d82523d6000602084013e610675565b606091505b505090508061068357600080fd5b50505050505050565b6003546000906060908015610837576000600254600014156106b0575060006106d9565b81600154600254436106c29190610f01565b6106cc9190610f2e565b6106d69190610f42565b90505b6000600382815481106106ee576106ee610f56565b6000918252602090912001546001600160a01b0316905080156108345760408051600481526024810182526020810180516001600160e01b031663376387c160e01b179052905160009081906001600160a01b03851690610750908590610ecf565b600060405180830381855afa9150503d806000811461078b576040519150601f19603f3d011682016040523d82523d6000602084013e610790565b606091505b50915091508115610830576000818060200190518101906107b19190610f6c565b90508060ff1660581415806107e057506001600160a01b03851660009081526004602052604090205460ff1615155b1561082e576040805160ff9290921660208301526001600160a01b03959095168186015260608082019690965284518082039096018652608001909352506001955091935061083992505050565b505b5050505b50505b505b9250929050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008051602061108c833981519152610882813361091d565b5060ff16600155565b6000828152602081905260409020600101546108a7813361091d565b6102e18383610ac1565b60008051602061108c8339815191526108ca813361091d565b50600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319166001600160a01b0392909216919091179055565b6109278282610840565b6102b75761093f816001600160a01b03166014610b26565b61094a836020610b26565b60405160200161095b929190610f89565b60408051601f198184030181529082905262461bcd60e51b825261037c91600401610ffe565b60035460011015610a07576003805461099c90600190610f01565b815481106109ac576109ac610f56565b600091825260209091200154600380546001600160a01b0390921691839081106109d8576109d8610f56565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b6003805480610a1857610a18611011565b600082815260209020810160001990810180546001600160a01b031916905501905550565b610a478282610840565b6102b7576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610a7d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610acb8282610840565b156102b7576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606000610b35836002611027565b610b40906002611046565b67ffffffffffffffff811115610b5857610b5861105e565b6040519080825280601f01601f191660200182016040528015610b82576020820181803683370190505b509050600360fc1b81600081518110610b9d57610b9d610f56565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610bcc57610bcc610f56565b60200101906001600160f81b031916908160001a9053506000610bf0846002611027565b610bfb906001611046565b90505b6001811115610c73576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610c2f57610c2f610f56565b1a60f81b828281518110610c4557610c45610f56565b60200101906001600160f81b031916908160001a90535060049490941c93610c6c81611074565b9050610bfe565b508315610cc25760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161037c565b9392505050565b600060208284031215610cdb57600080fd5b81356001600160e01b031981168114610cc257600080fd5b600060208284031215610d0557600080fd5b5035919050565b6001600160a01b0381168114610d2157600080fd5b50565b60008060408385031215610d3757600080fd5b823591506020830135610d4981610d0c565b809150509250929050565b60008060208385031215610d6757600080fd5b823567ffffffffffffffff80821115610d7f57600080fd5b818501915085601f830112610d9357600080fd5b813581811115610da257600080fd5b866020828501011115610db457600080fd5b60209290920196919550909350505050565b60005b83811015610de1578181015183820152602001610dc9565b83811115610df0576000848401525b50505050565b60008151808452610e0e816020860160208601610dc6565b601f01601f19169290920160200192915050565b8215158152604060208201526000610e3d6040830184610df6565b949350505050565b60ff81168114610d2157600080fd5b600060208284031215610e6657600080fd5b8135610cc281610e45565b600060208284031215610e8357600080fd5b8135610cc281610d0c565b600080600060608486031215610ea357600080fd5b8335610eae81610e45565b92506020840135610ebe81610d0c565b929592945050506040919091013590565b60008251610ee1818460208701610dc6565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b600082821015610f1357610f13610eeb565b500390565b634e487b7160e01b600052601260045260246000fd5b600082610f3d57610f3d610f18565b500490565b600082610f5157610f51610f18565b500690565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610f7e57600080fd5b8151610cc281610e45565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610fc1816017850160208801610dc6565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610ff2816028840160208801610dc6565b01602801949350505050565b602081526000610cc26020830184610df6565b634e487b7160e01b600052603160045260246000fd5b600081600019048311821515161561104157611041610eeb565b500290565b6000821982111561105957611059610eeb565b500190565b634e487b7160e01b600052604160045260246000fd5b60008161108357611083610eeb565b50600019019056fe61c92169ef077349011ff0b1383c894d86c5f0b41d986366b58a6cf31e93bedaa2646970667358221220324b550dda5c05faf0fe31e76f86e781d595e39a64860a6bbe4162df48d5ff1c64736f6c634300080a0033";

type KittyPartyStateTransitionKeeperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KittyPartyStateTransitionKeeperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KittyPartyStateTransitionKeeper__factory extends ContractFactory {
  constructor(...args: KittyPartyStateTransitionKeeperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KittyPartyStateTransitionKeeper> {
    return super.deploy(
      overrides || {}
    ) as Promise<KittyPartyStateTransitionKeeper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KittyPartyStateTransitionKeeper {
    return super.attach(address) as KittyPartyStateTransitionKeeper;
  }
  connect(signer: Signer): KittyPartyStateTransitionKeeper__factory {
    return super.connect(signer) as KittyPartyStateTransitionKeeper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KittyPartyStateTransitionKeeperInterface {
    return new utils.Interface(
      _abi
    ) as KittyPartyStateTransitionKeeperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KittyPartyStateTransitionKeeper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as KittyPartyStateTransitionKeeper;
  }
}