/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KittyPartyController,
  KittyPartyControllerInterface,
} from "../KittyPartyController";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "Completed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "KittenDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "KreatorStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "party",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
    ],
    name: "PaidFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "party",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "internalState",
        type: "uint256",
      },
    ],
    name: "PartyCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "refund",
        type: "uint256",
      },
    ],
    name: "RefundRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "party",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prevStage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nextStage",
        type: "uint256",
      },
    ],
    name: "StageTransition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "party",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "StopStaking",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "party",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "winners",
        type: "uint256[]",
      },
    ],
    name: "WinnersDecided",
    type: "event",
  },
  {
    inputs: [],
    name: "addRoundDeposits",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "applyCompleteParty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "applyInitialVerification",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "applyWinnerStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "callDataForUnwind",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "calldataForLock",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "changeState",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRound",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dai",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "bytes32",
        name: "_inviteHash",
        type: "bytes32",
      },
    ],
    name: "depositAndAddKittenToParty",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "durationInDays",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "kreatorFeesInBasisPoints",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "daoFeesInBasisPoints",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "winningStrategy",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "timeToCollection",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "maxKittens",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "durationInDays",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "amountInDAIPerRound",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "partyName",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "daiAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "yieldContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "winnerStrategy",
            type: "address",
          },
        ],
        internalType: "struct IKittenPartyInit.KittyInitiator",
        name: "_kittyInitiator",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "sellTokenAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "lpTokenAddress",
            type: "address",
          },
        ],
        internalType: "struct IKittenPartyInit.KittyYieldArgs",
        name: "_kittyYieldArgs",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tomCatContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "accountantContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "litterAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "daoTreasuryContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "keeperContractAddress",
            type: "address",
          },
        ],
        internalType: "struct IKittenPartyInit.KittyPartyFactoryArgs",
        name: "_kPFactory",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_kreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_kreatorStake",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isTransitionRequired",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "issueRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kPFactory",
    outputs: [
      {
        internalType: "address",
        name: "tomCatContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "accountantContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "litterAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "daoTreasuryContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "keeperContractAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kittyInitiator",
    outputs: [
      {
        internalType: "uint8",
        name: "kreatorFeesInBasisPoints",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "daoFeesInBasisPoints",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "winningStrategy",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "timeToCollection",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "maxKittens",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "durationInDays",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "amountInDAIPerRound",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "partyName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "daiAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "yieldContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "winnerStrategy",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kittyPartyControllerVars",
    outputs: [
      {
        internalType: "address",
        name: "kreator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "kreatorStake",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profitToSplit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "yieldWithPrincipal",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "localKittens",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "internalState",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastStageTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfRounds",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
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
    name: "partyRoundKittens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payOrganizerFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_timeToCollection",
        type: "uint8",
      },
    ],
    name: "setActivityInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_calldataForLock",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_callDataForUnwind",
        type: "bytes",
      },
    ],
    name: "setCallDataForYield",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_inviteHash",
        type: "bytes32",
      },
    ],
    name: "setInviteHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stage",
    outputs: [
      {
        internalType: "enum KittyPartyStateTransition.KittyPartyStages",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startNextRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startStakingMultiRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeSinceChange",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeToCollection",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b50612b9d8061002a6000396000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c806368a746b21161010f578063c040e6b8116100a2578063f1a269ac11610071578063f1a269ac14610538578063f29e493f14610540578063f4b9fa7514610548578063fcaa76641461057357600080fd5b8063c040e6b814610506578063eb5a9a5014610520578063ef33a11814610528578063f097f14e1461053057600080fd5b80638a19c8bc116100de5780638a19c8bc14610472578063b0a48ccc14610485578063b11746de1461048d578063b246b1dd146104f357600080fd5b806368a746b214610364578063715a70a71461036c5780638412e6671461044757806386fcc9441461045f57600080fd5b8063348056e7116101875780634c1064c2116101565780634c1064c21461031b57806354b6ba951461032e57806358d3467c1461033c578063599b8e051461035157600080fd5b8063348056e7146102bd578063376387c1146102e35780633bde045f146102eb5780633c3ccc441461031357600080fd5b8063099f7cdf116101c3578063099f7cdf1461020e5780630c3c784414610221578063125e245614610229578063236ad73c146102a657600080fd5b8062c044f0146101e95780630550b266146101f357806306214349146101fb575b600080fd5b6101f161057b565b005b6101f16106dd565b6101f16102093660046122fa565b61091b565b6101f161021c36600461231e565b610952565b6101f161096e565b60115460125460135460145460155460165461025c956001600160a01b0316949392919060ff8082169161010090041687565b604080516001600160a01b0390981688526020880196909652948601939093526060850191909152608084015260ff90811660a08401521660c082015260e0015b60405180910390f35b6102af60015481565b60405190815260200161029d565b6002546102d1906301000000900460ff1681565b60405160ff909116815260200161029d565b6102d1610a1f565b60025461030090600160201b900461ffff1681565b60405161ffff909116815260200161029d565b6101f1610c36565b6102af61032936600461231e565b610c54565b6002546103009061ffff1681565b610344610c75565b60405161029d9190612363565b6101f161035f36600461244d565b610d03565b6101f1610d46565b600654600754600854600954600a54600b546103d69560ff808216966101008304821696620100008404831696630100000085049093169561ffff600160201b860481169666010000000000009096041694929391926001600160a01b039283169291821691168b565b6040805160ff9c8d1681529a8c1660208c0152988b16988a019890985298909516606088015261ffff93841660808801529290911660a086015260c085015260e08401526001600160a01b03908116610100840152928316610120830152919091166101408201526101600161029d565b61044f610e30565b604051901515815260200161029d565b61044f61046d36600461231e565b610e58565b6002546102d19062010000900460ff1681565b6103446110d9565b600c54600d54600e54600f546010546104b9946001600160a01b03908116948116938116928116911685565b604080516001600160a01b03968716815294861660208601529285169284019290925283166060830152909116608082015260a00161029d565b6101f16105013660046124c6565b6110e6565b6000546105139060ff1681565b60405161029d919061255c565b6101f16112c2565b61044f6113c9565b6101f161158f565b6101f16115f5565b6102af6118a2565b60175461055b906001600160a01b031681565b6040516001600160a01b03909116815260200161029d565b6102af6118b2565b61058560036118ca565b60145461059157600080fd5b6005546040805163be1c766b60e01b815290516000926001600160a01b03169163be1c766b9160048083019260209291908290030181865afa1580156105db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ff9190612584565b60145461060c91906125b3565b6000601481905560055460408051636f8ae1bf60e11b8152905193945091926001600160a01b039091169163df15c37e91600480830192869291908290030181865afa158015610660573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261068891908101906125d5565b90506106948183611940565b6106a060046000612234565b7f439e81718f4bdf112226d70821f80ecd52126ae3c81a445222a7345f8dd4faaf30826040516106d19291906126b6565b60405180910390a15050565b6106e5611a43565b6106ef60036118ca565b6005546016546040516366ea5f5760e01b815260ff90911660048201526001600160a01b03909116906366ea5f5790602401600060405180830381600087803b15801561073b57600080fd5b505af115801561074f573d6000803e3d6000fd5b5050600a546040516308e7df1360e21b81526001600160a01b03909116925063239f7c4c915061078490601990600401612717565b6020604051808303816000875af11580156107a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c79190612584565b5060405130602482015260009060440160408051601f198184030181529181526020820180516001600160e01b03166301acb53960e41b179052600a54905191925060009182916001600160a01b0316906108239085906127bf565b600060405180830381855afa9150503d806000811461085e576040519150601f19603f3d011682016040523d82523d6000602084013e610863565b606091505b5091509150816108a05760405162461bcd60e51b815260206004820152600360248201526259453160e81b60448201526064015b60405180910390fd5b808060200190518101906108b49190612584565b6015556016546007546108ca9160ff16906127db565b6015546108d791906127fa565b60138190556040805130815260208101929092527f0100607dada7474255eccec3ac41980d65e94a27edf395d8bc37423fdc1c2284910160405180910390a1505050565b6011546001600160a01b0316331461093257600080fd5b6002805460ff90921663010000000263ff00000019909216919091179055565b6011546001600160a01b0316331461096957600080fd5b600355565b610976611a43565b61098060046118ca565b601654610100900460ff1660021461099757600080fd5b6016805461ff0019166103001790556011546109bf906001600160a01b031660016004611c40565b6011546012546109da916001600160a01b0316906000611c40565b6016546040805130815261010090920460ff1660208301527f67a57a1fb1b70372253313a75f3514431f00491305fd2d0b75fef50b3fcb7e66910160405180910390a1565b60008060005460ff166005811115610a3957610a39612546565b148015610a715750600254610a5b906301000000900460ff1662015180612811565b62ffffff16600154610a6d919061283c565b4210155b80610aac5750600160005460ff166005811115610a9057610a90612546565b148015610aac5750600154610aa8906201518061283c565b4210155b80610afd5750600260005460ff166005811115610acb57610acb612546565b148015610afd5750600254610ae79061ffff1662015180612811565b62ffffff16600154610af9919061283c565b4210155b80610b585750600360005460ff166005811115610b1c57610b1c612546565b148015610b375750600154610b339061708061283c565b4210155b8015610b58575060025462010000810460ff16600160201b90910461ffff16115b80610bb45750600360005460ff166005811115610b7757610b77612546565b148015610b925750600154610b8e9061708061283c565b4210155b8015610bb4575060025462010000810460ff16600160201b90910461ffff1611155b15610c305760005460029060ff166005811115610bd357610bd3612546565b60ff161115610c075760025462010000810460ff16600160201b90910461ffff1611610c00576001610c0a565b6000610c0a565b60005b60005460ff166005811115610c2157610c21612546565b610c2b9190612854565b905090565b50605890565b610c4060036118ca565b610c48611a43565b610c5260016118ca565b565b60048181548110610c6457600080fd5b600091825260209091200154905081565b60198054610c82906126e2565b80601f0160208091040260200160405190810160405280929190818152602001828054610cae906126e2565b8015610cfb5780601f10610cd057610100808354040283529160200191610cfb565b820191906000526020600020905b815481529060010190602001808311610cde57829003601f168201915b505050505081565b6011546001600160a01b03163314610d1a57600080fd5b8151610d2d906018906020850190612252565b508051610d41906019906020840190612252565b505050565b60165460ff166002811015610d5a57600080fd5b610d62611a43565b610d6c60026118ca565b60165460ff61010090910416600114610dc75760405162461bcd60e51b815260206004820152601d60248201527f526f756e6473207765726520616c726561647920696e697469617465640000006044820152606401610897565b6016805461ff001916610200179055600654600754610df191600160201b900461ffff16906127db565b60125410610e1d57506016546002805465ffff00000000191660ff909216600160201b02919091179055565b6002805465ffff00000000191690555b50565b6011546000906001600160a01b03163314610e4a57600080fd5b610e52611a43565b50600190565b6000818060035414610e6957600080fd5b610e71611a43565b610e7b60006118ca565b601654610e8c9060ff166001612854565b6016805460ff191660ff929092169182179055600654600160201b900461ffff161015610eb857600080fd5b6011546001600160a01b0316331415610f135760405162461bcd60e51b815260206004820152601d60248201527f4b726561746f722063616e6e6f74206a6f696e206f776e2070617274790000006044820152606401610897565b600254600160201b900461ffff1615610f6e5760405162461bcd60e51b815260206004820152601d60248201527f526f756e6473207765726520616c726561647920696e697469617465640000006044820152606401610897565b60405133602482015260009060440160408051601f198184030181529181526020820180516001600160e01b0316635bea863560e01b179052600e5490519192506000916001600160a01b0390911690610fc99084906127bf565b6000604051808303816000865af19150503d8060008114611006576040519150601f19603f3d011682016040523d82523d6000602084013e61100b565b606091505b505090508061104f5760405162461bcd60e51b815260206004820152601060248201526f12da5d1d195b881b9bdd08185919195960821b6044820152606401610897565b611057611d23565b600a54604051637298696b60e01b81526001600160a01b0390911690637298696b9061108890601890600401612717565b6020604051808303816000875af11580156110a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cb9190612584565b506001935050505b50919050565b60188054610c82906126e2565b601654610100900460ff16156111345760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e48125b9a5d1a585b1a5e9959606a1b6044820152606401610897565b6016805461ff00191661010017905584600661115082826128d6565b50839050600c6111608282612a29565b5050601180546001600160a01b0319166001600160a01b038416179055601281905561119461012086016101008701612aae565b601780546001600160a01b039283166001600160a01b031991821617909155600b5460058054909216908316179055600a541663df05ab786111d96020870187612aae565b6111e96040880160208901612aae565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401600060405180830381600087803b15801561123157600080fd5b505af1158015611245573d6000803e3d6000fd5b5061125a9250505060c0860160a08701612acb565b6002805461ffff191661ffff929092169190911790556040518181527fde81ed219ad2ae3b1b28cce1a55b7544cb80275e3642be9b4c03e60477e3d2f29060200160405180910390a16112bb6112b660808701606088016122fa565b6120cc565b5050505050565b6112cc60036118ca565b6013546112d857600080fd5b600654601354600091612710916112f29160ff16906127db565b6112fc91906125b3565b6006546013549192506000916127109161131f9161010090910460ff16906127db565b61132991906125b3565b9050611335818361283c565b60155461134291906127fa565b60145560006013819055601154611366916001600160a01b03909116908490611c40565b600f5461137e906001600160a01b0316826000611c40565b7f52e9b61fb2517a3b8014966f3de98e7485159cdb95f21696e150f50171c65235306113aa838561283c565b604080516001600160a01b0390931683526020830191909152016106d1565b6040513060248201523360448201819052600091829060640160408051601f198184030181529181526020820180516001600160e01b0316639f39105560e01b179052600e54905191925060009182916001600160a01b03169061142e9085906127bf565b600060405180830381855afa9150503d8060008114611469576040519150601f19603f3d011682016040523d82523d6000602084013e61146e565b606091505b5091509150816114a55760405162461bcd60e51b81526020600482015260026024820152614e4560f01b6044820152606401610897565b6000818060200190518101906114bb9190612ae8565b90506001811515146114f45760405162461bcd60e51b8152602060048201526002602482015261272960f11b6044820152606401610897565b6114fc611a43565b61150660016118ca565b61150e611d23565b600a54604051637298696b60e01b81526001600160a01b0390911690637298696b9061153f90601890600401612717565b6020604051808303816000875af115801561155e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115829190612584565b5060019550505050505090565b61159960016118ca565b60165460045460ff909116146115e35760405162461bcd60e51b815260206004820152600f60248201526e4b697474656e204d697373696e672160881b6044820152606401610897565b6115eb611a43565b610c5260026118ca565b6011546001600160a01b0316331461160c57600080fd5b600360005460ff16600581111561162557611625612546565b14156116735760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f7420726566756e6420696e207061796f75740000000000000000006044820152606401610897565b600460005460ff16600581111561168c5761168c612546565b14156116da5760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f7420726566756e6420696e20436f6d706c657465640000000000006044820152606401610897565b601654610100900460ff16600314156117255760405162461bcd60e51b815260206004820152600d60248201526c10d85b9b9bdd081c99599d5b99609a1b6044820152606401610897565b6016805461ff00191661030017905561173e6005612160565b60165460ff161561182957600a546040516308e7df1360e21b81526001600160a01b039091169063239f7c4c9061177a90601990600401612717565b6020604051808303816000875af1158015611799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bd9190612584565b5061181d600480548060200260200160405190810160405280929190818152602001828054801561180d57602002820191906000526020600020905b8154815260200190600101908083116117f9575b5050505050600660010154611940565b61182960046000612234565b60065460125460009160649161184791610100900460ff16906127db565b61185191906125b3565b60115490915061186c906001600160a01b0316826000611c40565b6040518181527f431b80eca5334464928f696b9231ecf0987e4f1a105f7f560f22514a2fb93dd79060200160405180910390a150565b600060015442610c2b91906127fa565b6000805460ff166005811115610c2b57610c2b612546565b8060058111156118dc576118dc612546565b60005460ff1660058111156118f3576118f3612546565b14610e2d5760405162461bcd60e51b815260206004820152601960248201527f4e6f7420696e20746865206578706563746564207374616765000000000000006044820152606401610897565b600e54604051600091611967916001600160a01b0390911690309086908690602401612b0a565b60408051601f198184030181529181526020820180516001600160e01b0316630130d30d60e61b179052600d5490519192506000916001600160a01b03909116906119b39084906127bf565b6000604051808303816000865af19150503d80600081146119f0576040519150601f19603f3d011682016040523d82523d6000602084013e6119f5565b606091505b5050905080611a3d5760405162461bcd60e51b815260206004820152601460248201527310985d18da081c9958d95a5c1d0819985a5b195960621b6044820152606401610897565b50505050565b6000805460ff166005811115611a5b57611a5b612546565b148015611a935750600254611a7d906301000000900460ff1662015180612811565b62ffffff16600154611a8f919061283c565b4210155b15611aa257610c526002612160565b600160005460ff166005811115611abb57611abb612546565b148015611ad75750600154611ad3906201518061283c565b4210155b15611ae657610c526001612160565b600260005460ff166005811115611aff57611aff612546565b148015611b315750600254611b1b9061ffff1662015180612811565b62ffffff16600154611b2d919061283c565b4210155b15611b4057610c526001612160565b600360005460ff166005811115611b5957611b59612546565b148015611b745750600154611b709061708061283c565b4210155b8015611b95575060025462010000810460ff16600160201b90910461ffff16115b15611bdb576000805460ff191660011790556002805460ff62010000909104169080611bc083612b47565b91906101000a81548160ff021916908360ff16021790555050565b600360005460ff166005811115611bf457611bf4612546565b148015611c0f5750600154611c0b9061708061283c565b4210155b8015611c31575060025462010000810460ff16600160201b90910461ffff1611155b15610c5257610c526001612160565b6001600160a01b038316611c5357600080fd5b6040516001600160a01b0384166024820152604481018290526064810183905260806084820152600060a482018190529060c40160408051601f198184030181529181526020820180516001600160e01b031663731133e960e01b179052600d5490519192506000916001600160a01b0390911690611cd39084906127bf565b6000604051808303816000865af19150503d8060008114611d10576040519150601f19603f3d011682016040523d82523d6000602084013e611d15565b606091505b50509050806112bb57600080fd5b6017546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611d6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d909190612584565b600754909150811015611dda5760405162461bcd60e51b81526020600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152606401610897565b601754604051636eb1769f60e11b81523360048201523060248201526000916001600160a01b03169063dd62ed3e90604401602060405180830381865afa158015611e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e4d9190612584565b600754909150811015611e9a5760405162461bcd60e51b8152602060048201526015602482015274141b19585cd948185c1c1c9bdd9948185b5bdd5b9d605a1b6044820152606401610897565b601754600a546007546040516323b872dd60e01b81523360048201526001600160a01b03928316602482015260448101919091529116906323b872dd906064016020604051808303816000875af1158015611ef9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1d9190612ae8565b611f5b5760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8811985a5b1959608a1b6044820152606401610897565b60405130602482015233604482015260009060640160408051601f198184030181529181526020820180516001600160e01b031663d1ed3dad60e01b179052600e54905191925060009182916001600160a01b031690611fbc9085906127bf565b6000604051808303816000865af19150503d8060008114611ff9576040519150601f19603f3d011682016040523d82523d6000602084013e611ffe565b606091505b5091509150816120435760405162461bcd60e51b815260206004820152601060248201526f12da5d1d195b881b9bdd08185919195960821b6044820152606401610897565b6000818060200190518101906120599190612584565b6007546040519081529091507f336de3ae572aef04220e130cff0a4b8b0f58064d9f4c28ce642ccb00147eb6849060200160405180910390a1600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01555050505050565b6000805460ff1660058111156120e4576120e4612546565b1461213c5760405162461bcd60e51b815260206004820152602260248201527f4e6f7420696e2074686520496e697469616c436f6c6c656374696f6e20737461604482015261676560f01b6064820152608401610897565b426001556002805460ff90921663010000000263ff00000019909216919091179055565b6000805460ff8084169116600581111561217c5761217c612546565b612186919061283c565b90506005811115612195575060055b6000547f06246b8f6e064f49e451fe9caf18d443c71c2dfdcef11b6bc2ea4a00312d777090309060ff1660058111156121d0576121d0612546565b604080516001600160a01b0390931683526020830191909152810183905260600160405180910390a180600581111561220b5761220b612546565b6000805460ff1916600183600581111561222757612227612546565b0217905550504260015550565b5080546000825590600052602060002090810190610e2d91906122d6565b82805461225e906126e2565b90600052602060002090601f01602090048101928261228057600085556122c6565b82601f1061229957805160ff19168380011785556122c6565b828001600101855582156122c6579182015b828111156122c65782518255916020019190600101906122ab565b506122d29291506122d6565b5090565b5b808211156122d257600081556001016122d7565b60ff81168114610e2d57600080fd5b60006020828403121561230c57600080fd5b8135612317816122eb565b9392505050565b60006020828403121561233057600080fd5b5035919050565b60005b8381101561235257818101518382015260200161233a565b83811115611a3d5750506000910152565b6020815260008251806020840152612382816040850160208701612337565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156123d5576123d5612396565b604052919050565b600082601f8301126123ee57600080fd5b813567ffffffffffffffff81111561240857612408612396565b61241b601f8201601f19166020016123ac565b81815284602083860101111561243057600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561246057600080fd5b823567ffffffffffffffff8082111561247857600080fd5b612484868387016123dd565b9350602085013591508082111561249a57600080fd5b506124a7858286016123dd565b9150509250929050565b6001600160a01b0381168114610e2d57600080fd5b60008060008060008587036102808112156124e057600080fd5b610160808212156124f057600080fd5b879650604061015f198301121561250657600080fd5b8701945060a061019f198201121561251d57600080fd5b506101a086019250610240860135612534816124b1565b94979396509194610260013592915050565b634e487b7160e01b600052602160045260246000fd5b602081016006831061257e57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561259657600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000826125d057634e487b7160e01b600052601260045260246000fd5b500490565b600060208083850312156125e857600080fd5b825167ffffffffffffffff8082111561260057600080fd5b818501915085601f83011261261457600080fd5b81518181111561262657612626612396565b8060051b91506126378483016123ac565b818152918301840191848101908884111561265157600080fd5b938501935b8385101561266f57845182529385019390850190612656565b98975050505050505050565b600081518084526020808501945080840160005b838110156126ab5781518752958201959082019060010161268f565b509495945050505050565b6001600160a01b03831681526040602082018190526000906126da9083018461267b565b949350505050565b600181811c908216806126f657607f821691505b602082108114156110d357634e487b7160e01b600052602260045260246000fd5b600060208083526000845481600182811c91508083168061273957607f831692505b85831081141561275757634e487b7160e01b85526022600452602485fd5b8786018381526020018180156127745760018114612785576127b0565b60ff198616825287820196506127b0565b60008b81526020902060005b868110156127aa57815484820152908501908901612791565b83019750505b50949998505050505050505050565b600082516127d1818460208701612337565b9190910192915050565b60008160001904831182151516156127f5576127f561259d565b500290565b60008282101561280c5761280c61259d565b500390565b600062ffffff808316818516818304811182151516156128335761283361259d565b02949350505050565b6000821982111561284f5761284f61259d565b500190565b600060ff821660ff84168060ff038211156128715761287161259d565b019392505050565b60008135612886816122eb565b92915050565b61ffff81168114610e2d57600080fd5b600081356128868161288c565b60008135612886816124b1565b80546001600160a01b0319166001600160a01b0392909216919091179055565b6128f36128e283612879565b825460ff191660ff91909116178255565b61291861290260208401612879565b825461ff00191660089190911b61ff0016178255565b61293f61292760408401612879565b825462ff0000191660109190911b62ff000016178255565b61296861294e60608401612879565b825463ff000000191660189190911b63ff00000016178255565b6129956129776080840161289c565b825465ffff00000000191660209190911b65ffff0000000016178255565b6129c66129a460a0840161289c565b825467ffff000000000000191660309190911b67ffff00000000000016178255565b60c0820135600182015560e082013560028201556129f36129ea61010084016128a9565b600383016128b6565b612a0c612a0361012084016128a9565b600483016128b6565b612a25612a1c61014084016128a9565b600583016128b6565b5050565b8135612a34816124b1565b612a3e81836128b6565b506020820135612a4d816124b1565b612a5a81600184016128b6565b506040820135612a69816124b1565b612a7681600284016128b6565b506060820135612a85816124b1565b612a9281600384016128b6565b506080820135612aa1816124b1565b610d4181600484016128b6565b600060208284031215612ac057600080fd5b8135612317816124b1565b600060208284031215612add57600080fd5b81356123178161288c565b600060208284031215612afa57600080fd5b8151801515811461231757600080fd5b6001600160a01b03858116825284166020820152608060408201819052600090612b369083018561267b565b905082606083015295945050505050565b600060ff821660ff811415612b5e57612b5e61259d565b6001019291505056fea2646970667358221220dfd8596bab116ed252b63dff414a69d4c8314c71f05f10dda71a64aa5a106d9964736f6c634300080a0033";

type KittyPartyControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KittyPartyControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KittyPartyController__factory extends ContractFactory {
  constructor(...args: KittyPartyControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KittyPartyController> {
    return super.deploy(overrides || {}) as Promise<KittyPartyController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KittyPartyController {
    return super.attach(address) as KittyPartyController;
  }
  connect(signer: Signer): KittyPartyController__factory {
    return super.connect(signer) as KittyPartyController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KittyPartyControllerInterface {
    return new utils.Interface(_abi) as KittyPartyControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KittyPartyController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as KittyPartyController;
  }
}
