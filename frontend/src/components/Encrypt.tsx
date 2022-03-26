import TextField from "@mui/material/TextField";
import { Buffer } from "buffer";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  MenuItem,
  Select,
  Divider,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { getContractByName } from "../helpers/Contract";
import { useWeb3React } from "@web3-react/core";
import { IFormControl } from "../models/Form.models";
import Spinner from "./Spinner";
import { IProfile, IPub } from "../models/ContractResponse";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import LitJsSdk from "lit-js-sdk";

declare let window: any;

const Encrypt = () => {
  const { active, chainId, activate, library } = useWeb3React();
  const [toggleValue, setToggleValue] = useState<"account" | "dapp">("account");
  const [chain, setChain] = useState("mumbai");
  const PINATA_API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3NDU3NWY0Ny0xMzdiLTQzMjUtOGM1MS1mYjEwY2VmMzA5MjMiLCJlbWFpbCI6ImNvcnJpbm9zaGFkM0Bjb25maWRlc2suY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MSwibGFzdF9taWdyYXRlZCI6MTYzNjUwMDAxMjEyNH0sIm1mYV9lbmFibGVkIjpmYWxzZX0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImY3Yjk2N2JiNTVkNDU1MjI1YmMxIiwic2NvcGVkS2V5U2VjcmV0IjoiZDhhYjBlNzBiMTUyMWY2ZjVjNDYwZGJiY2I1Njg1YjhiOTA2NDVhZGQxMjYyMjkxMWUxMmU0NDc1YTJhZDE5MCIsImlhdCI6MTY0ODE4ODM4Mn0.RbWqh6p7IyTnCQFpR3j72teZvVLDOE3E1EqDS61HktA";

  let accessControlConditions: {
    contractAddress: string;
    standardContractType: string;
    chain: string;
    method: string;
    parameters: string[];
    returnValueTest: { comparator: string; value: string };
  }[];
  let authSig: any;
  let fileUrl: any;
  let strfileUrl: any;
  const handleSubmit = async () => {
    authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "mumbai" });

    // example - here the access control is for a dummy NFT contract holder, in real it should be as per DAO conditions
    accessControlConditions = [
      {
        contractAddress: "0x3c3b99BC9559D39d6dbc3fA4afF6D3373BF53A6f",
        standardContractType: "ERC721",
        chain,
        method: "balanceOf",
        parameters: [":userAddress"],
        returnValueTest: {
          comparator: ">",
          value: "0",
        },
      },
    ];
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
      "this is a secret message"
    );
  };

  const handleAccessControl = async () => {
    accessControlConditions = [
      {
        contractAddress: "0x3c3b99BC9559D39d6dbc3fA4afF6D3373BF53A6f",
        standardContractType: "ERC721",
        chain,
        method: "balanceOf",
        parameters: [":userAddress"],
        returnValueTest: {
          comparator: ">",
          value: "0",
        },
      },
    ];
  };

  const handleEncrypt = async () => {
    const client = new LitJsSdk.LitNodeClient();
    await client.connect();
    window["litNodeClient"] = client;
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
      "My contact information is wizgotd@protonmail.com"
    );
    console.log("Leons Data has been encrypted", encryptedString);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const encryptedSymmetricKey = await window.litNodeClient.saveEncryptionKey({
      accessControlConditions,
      symmetricKey,
      authSig,
      chain,
    });
    const encryptedStringUTF = await encryptedString.text();
    console.log(
      "Leons Data has been encryptedSymmetricKey",
      encryptedSymmetricKey
    );
    const jsonToSend: any = {
      profileId: 65,
      encryptedSymmetricKey: encryptedSymmetricKey,
      encryptedStringUTF: encryptedStringUTF,
    };

    const uploadPromise = new Promise((resolve, reject) => {
      fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${PINATA_API_KEY}`,
        },
        body: JSON.stringify(jsonToSend),
        // body: jsonToSend
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
    const formData = new FormData();
    formData.append("file", encryptedString);
    const UploadEncrypedString = new Promise((resolve, reject) => {
      fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${PINATA_API_KEY}`,
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });

    // const symmetricKeyDEC = await window.litNodeClient.getEncryptionKey({
    //   accessControlConditions,
    //   // Note, below we convert the encryptedSymmetricKey from a UInt8Array to a hex string.  This is because we obtained the encryptedSymmetricKey from "saveEncryptionKey" which returns a UInt8Array.  But the getEncryptionKey method expects a hex string.
    //   toDecrypt: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16"),
    //   chain,
    //   authSig,
    // });

    // const decryptedString = await LitJsSdk.decryptString(
    //   encryptedString,
    //   symmetricKeyDEC
    // );
    // console.log("Decrypted Data --", decryptedString);

    // const { balanceStorageSlot } = LitJsSdk.LIT_CHAINS[chain]
    // const merkleProof = await LitJsSdk.getMerkleProof({ tokenAddress, balanceStorageSlot, tokenId })

    const uploadRespBody: any = await uploadPromise;
    console.log("uploadresp is ", uploadRespBody);
    const ipfsCid = uploadRespBody["IpfsHash"];
    fileUrl = `https://loties.mypinata.cloud/ipfs/${ipfsCid}`;
    console.log("fileUrl", fileUrl);

    const uploadRespBodySTR: any = await UploadEncrypedString;
    console.log("uploadresp is ", uploadRespBody);
    const ipfsCidSTR = uploadRespBodySTR["IpfsHash"];
    strfileUrl = `https://loties.mypinata.cloud/ipfs/${ipfsCidSTR}`;
    console.log("strfileUrl", strfileUrl);
  };

  const handleDecrypt = async () => {
    const client = new LitJsSdk.LitNodeClient();
    await client.connect();
    window["litNodeClient"] = client;

    axios.get(fileUrl).then(async (res: any) => {
      const encryptDATA = res["data"];
      axios({
        url: strfileUrl, //your url
        method: 'GET',
        responseType: 'blob'})
        .then(async (res: any) => {
        console.log(
          "Data to new Blob([response.data])  --",
          new Blob([res.data])
        );
        const symmetricKey = await window.litNodeClient.getEncryptionKey({
          accessControlConditions,
          // Note, below we convert the encryptedSymmetricKey from a UInt8Array to a hex string.  This is because we obtained the encryptedSymmetricKey from "saveEncryptionKey" which returns a UInt8Array.  But the getEncryptionKey method expects a hex string.
          toDecrypt: LitJsSdk.uint8arrayToString(
            Uint8Array.from(
              Object.values(encryptDATA["encryptedSymmetricKey"])
            ),
            // Buffer.from(JSON.stringify(encryptDATA["encryptedSymmetricKey"])),
            "base16"
          ),
          chain,
          authSig,
        });
        console.log("Proceeding to decrypt the string");
        const decryptedString = await LitJsSdk.decryptString(
          new Blob([res.data]),
          symmetricKey
        );
        console.log("Decrypted Data --", decryptedString);
      });
    });
  };
  return (
    <div className="EncryptContainer">
      <div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Button onClick={handleSubmit} variant="outlined">
                Login into Lit
              </Button>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Button onClick={handleAccessControl} variant="outlined">
                Create DAO Condition
              </Button>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <Button onClick={handleEncrypt} variant="outlined">
                Encrypt in (DAPP)
              </Button>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <Button variant="contained" size="medium" onClick={handleDecrypt}>
                Decrypt on Lens
              </Button>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Encrypt;
