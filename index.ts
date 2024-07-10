import { init as initLazy, lazyDistributorKey } from "@helium/lazy-distributor-sdk";
import { getCurrentRewards } from "@helium/distributor-oracle";
import { getAsset } from "@helium/spl-utils";
import {
    PublicKey,
    Transaction, TransactionInstruction
} from "@solana/web3.js";
import { HNT_MINT, IOT_MINT, MOBILE_MINT } from "@helium/spl-utils";
import { daoKey, subDaoKey, init as initSubDaos } from "@helium/helium-sub-daos-sdk";
import {
    iotInfoKey,
    mobileInfoKey,
    entityCreatorKey,
    rewardableEntityConfigKey,
    init as initHem,
  } from "@helium/helium-entity-manager-sdk";
import { HeliumEntityManager } from "@helium/idls/lib/types/helium_entity_manager";
import { getHotspotDetails } from "@helium/hotspot-utils"
import * as anchor from "@coral-xyz/anchor";
import { cellToLatLng } from "h3-js";

// This pulls from the spl-utils default mint address or if you put one in your environment you can test with a different set of contracts.
const HNT = process.env.HNT_MINT ? new PublicKey(process.env.HNT_MINT) : HNT_MINT;
const IOT = process.env.IOT_MINT ? new PublicKey(process.env.IOT_MINT) : IOT_MINT;
const DAO_KEY = daoKey(HNT)[0];
const iotSubDAO = subDaoKey(IOT)[0];

// we're just using the public (rate limited) solana RPC here
anchor.setProvider(anchor.AnchorProvider.local("https://api.mainnet-beta.solana.com"));
 
export async function getDaoAccount() {
    const provider = anchor.getProvider() as anchor.AnchorProvider;
    const program = await initSubDaos(provider);

    const daoAccount = await program.account.daoV0.fetch(new PublicKey(DAO_KEY));

    console.log(`daoAccount = ${daoAccount}`);
    const str = JSON.stringify(daoAccount);
    console.log(str, null, 2);
    console.log(daoAccount.hntMint.toString());
    return; 
}

// getDaoAccount();
export async function getHotspotDetail() {
    const provider = anchor.getProvider() as anchor.AnchorProvider;
    // Put entity_key_str here (from the foundations api data)
    const hotspotAddress = "112jkcPTa1cqAcTjsYyGr7ikmhnhoJdZgcD1Ho2dmSeCcAyNZwVw"
    const hemProgram = await initHem(provider)

    // Get hotspot details from the solona blockchain using public address of hotspot
    const hotspotDetails = await getHotspotDetails({
        hemProgram: hemProgram,
        address: hotspotAddress,
        type: 'IOT',
    })

    console.log(hotspotDetails);

    // Your H3 hex string
    const location = hotspotDetails?.location;

    // Specify required resolution (e.g., 12 for solana data)
    const resolution = 12;

    // Convert H3 hex to lat/lng (assuming resolution 0)
    const latLng = cellToLatLng(location.toString("hex"));

    console.log(`Latitude: ${latLng[0]}, Longitude: ${latLng[1]}`);

}

getHotspotDetail();
  