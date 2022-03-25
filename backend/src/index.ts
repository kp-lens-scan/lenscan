import * as dotenv from "dotenv";
import {  
    ethers, 
    Wallet, 
    Contract, 
    BytesLike,
    ContractTransaction 
} from "ethers";
import cors from "cors";
import express from "express";
import Database from "better-sqlite3";

import { MockProfileCreationProxy__factory, LensHub__factory } from '../typechain-types';
import { CreateProfileDataStruct, PostDataStruct } from '../typechain-types/LensHub';

dotenv.config();

const PORT = 80;
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const MockHubAddress = "0x9BB48d8F9c4596b98C8bB1fB6D67aaE238F81CC2";
const LensHubProxy = "0xd7B3481De00995046C7850bCe9a5196B7605c367";
const EmptyCollectModuleAddr = "0xb96e42b5579e76197B4d2EA710fF50e037881253";

let wallet: Wallet = new ethers.Wallet(process.env.PRIVATE_KEY as BytesLike);

let provider = ethers.getDefaultProvider("https://matic-mumbai.chainstacklabs.com");
let governance: Wallet = new ethers.Wallet(process.env.PRIVATE_KEY as BytesLike, provider);

const app = express();

const mockHub = MockProfileCreationProxy__factory.connect(
    MockHubAddress,
    governance
);
const lensHub = LensHub__factory.connect(LensHubProxy, governance);

const createTable = "CREATE TABLE IF NOT EXISTS users('username' varchar, 'address' varchar, 'postcount' number);";
const db = new Database("lenscan.db", { verbose: console.log });
db.exec(createTable);


app.use(express.json());

app.post("/createprofile", async (req: any, res: any) => {
    const username = req.body?.username;
    const address = req.body?.address;

    if (username && ethers.utils.isAddress(address)) {
        const inputStruct: CreateProfileDataStruct = {
            to: governance.address,
            handle: username,
            imageURI:
              'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
            followModule: ZERO_ADDRESS,
            followModuleData: [],
            followNFTURI:
              'https://ipfs.fleek.co/ipfs/ghostplantghostplantghostplantghostplantghostplantghostplan',
        };
        try {
            await waitForTx(mockHub.connect(governance).proxyCreateProfile(inputStruct));
            const profileID = await lensHub.getProfileIdByHandle(username);
            
            const stmt = db.prepare(
                "INSERT INTO scores (username address, postcount) VALUES (?, ?, ?)"
            );
            stmt.run(username, address.toLowerCase(), 0);

            res.send({
                "profileId": profileID.toString()
            });
        } catch (error) {
            res.send("Error occured");
        }
    } else {
        res.send("Invalid params");
    }
});

app.post("/publish", async (req: any, res: any) => {
    const username = req.body?.username;
    const address = req.body?.address;
    const fileUrl = req.body?.fileUrl;

    const profileID = await lensHub.getProfileIdByHandle(username);

    if (profileID && ethers.utils.isAddress(address) && address) {
        const inputStruct: PostDataStruct = {
            profileId: profileID,
            contentURI: fileUrl,
            collectModule: EmptyCollectModuleAddr,
            collectModuleData: [],
            referenceModule: ZERO_ADDRESS,
            referenceModuleData: [],
        };
        try {
            await waitForTx(lensHub.connect(governance).post(inputStruct));
            const stmt1 = db.prepare(
                "SELECT postcount FROM users WHERE address = ?"
            );
            const postCount = stmt1.all(address.toLowerCase());
            const newCount = postCount[0].postcount + 1;

            const stmt2 = db.prepare(
                "UPDATE users SET postcount=? WHERE address = ?"
            );
            stmt2.run(newCount, address);
            console.log(await lensHub.getPub(profileID, newCount));
            res.send("Post created");
        } catch(error) {
            res.send("Error occured");
        }
    } else {
        res.send("Invalid username");
    }
});   

app.listen(PORT, () => {
    console.log(`⚡️[server]: The Server is running at http://localhost:${PORT}`);
});

async function waitForTx(tx: Promise<ContractTransaction>) {
    await (await tx).wait();
}