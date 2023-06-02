import { init as initSubDaos } from "@helium/helium-sub-daos-sdk";
import { init, lazyDistributorKey } from "@helium/lazy-distributor-sdk";
import { getCurrentRewards } from "@helium/distributor-oracle";
import * as anchor from "@coral-xyz/anchor";
import {
    PublicKey,
    Transaction, TransactionInstruction
} from "@solana/web3.js";
import { HNT_MINT } from "@helium/spl-utils";
import { daoKey, subDaoKey } from "@helium/helium-sub-daos-sdk";

const HNT = process.env.HNT_MINT ? new PublicKey(process.env.HNT_MINT) : HNT_MINT;
const DAO = daoKey(HNT)[0];

anchor.setProvider(anchor.AnchorProvider.local("https://api.mainnet-beta.solana.com"));

export async function getDaoAccount() {
    const provider = anchor.getProvider() as anchor.AnchorProvider;
    const program = await initSubDaos(provider);

    const daoAccount = await program.account.daoV0.fetch(new PublicKey(DAO));

    console.log(`daoAccount = ${daoAccount}`);
    const str = JSON.stringify(daoAccount);
    console.log(str, null, 2);
    console.log(daoAccount.hntMint.toString());
    return; 
}

getDaoAccount();