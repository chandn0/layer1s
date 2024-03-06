"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";
import m7 from  "../public/m7.png";
import m8 from  "../public/m8.png";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";


export const BSC = () => {
    return(
        <div>
            <br/>
            <h1 className={title()}>
					BSC
				</h1> 
                <h2 className={subtitle()}>1. Network Security:</h2>
    <ul>
        <li>Currently, the Binance Smart Chain (BSC) relies on a <strong>centralized</strong> validator set consisting of only <strong>40 active validators</strong> (21 Cabinets and 19 Candidates).</li>
        <li>This centralized system raises concerns about <strong>single points of failure</strong> and potential manipulation by Binance.</li>
        <li>The total staked amount on the network is <strong>23,487,489 BNB</strong>, which is equivalent to approximately <strong>$9 billion USD</strong> (as of March 6, 2024).</li>
    </ul>

    <h2 className={subtitle()} >2. Censorship Resistance:</h2>
    <p>The incident on October 6th, 2022, where Binance <strong>paused the BSC network</strong> to address an exploit further highlights the chain`&apos;`s centralized nature. While stopping an exploit can be beneficial, the ability to <strong>pause a supposedly decentralized network</strong> contradicts the core principles of decentralization. This also raises concerns about potential <strong>censorship of transactions</strong> in the future, especially considering Binance`&apos;`s need to comply with regulations like those from the Office of Foreign Assets Control (OFAC).</p>

    <h2 className={subtitle()} >3. Liveliness:</h2>
    <p>Currently, <strong>76% of BSC validators utilize the same client software, Erigon</strong>. This creates a <strong>single point of failure</strong>. If a critical bug were discovered in Erigon, it could potentially <strong>halt the entire BSC network</strong>.</p>

    <h2 className={subtitle()}>4. Governance Upgrades:</h2>
    <p>Similar to the validator selection process, <strong>governance upgrades on BSC are entirely controlled by the Binance team</strong>. This further centralizes decision-making power and limits community involvement in shaping the network`&apos;`s future.</p>
    <Divider className="my-4" />

    <h3 className={subtitle()}>Reference:</h3>
    <ul className={"list-disc list-inside"}>
        <li><Link href="https://bscscan.com/validators" target="_blank">BNB Smart Chain Validators | BscScan</Link></li>
        <li><Link href="https://www.bnbchain.org/en/staking" target="_blank">BNB Chain | BNB Chain Staking | BNB Chain Swap</Link></li>
        <li><Link href="https://docs.bnbchain.org/docs/validator/overview.html" target="_blank">Overview | BNB Chain Documentation</Link></li>
        <li><Link href="https://bscscan.com/nodetracker" target="_blank">BNB Smart Chain Node Tracker | BscScan</Link></li>
    </ul>
</div>
    );
};