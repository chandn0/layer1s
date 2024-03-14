"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";
import m7 from  "../public/m7.png";
import m9 from  "../public/m9.png";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";


export const Tron = () => {
    return(
        <div>
            <br/>
            <h1 className={title()}>
					Tron
				</h1> 
                <h2 className={subtitle()}>1. Network Security:</h2>

                <Image alt="" src={m9} />


<p>Tron uses a <strong>Proof-of-Stake (PoS)</strong> consensus mechanism where <strong>27 elected Super Representatives</strong> are responsible for <strong>validating transactions, creating new blocks, and securing the network</strong>. These SRs receive <strong>voting rewards and block rewards</strong> as compensation for their role.</p>

<h2 className={subtitle()}>2. Censorship Resistance:</h2>

<p>The majority of the 27 SR entities are located in the United States, necessitating compliance with regulatory frameworks such as the Office of Foreign Assets Control (OFAC).</p>

<h2 className={subtitle()}>3. Liveliness:</h2>

<p>The Tron network suffers from a <strong>single point of failure</strong> when it comes to client software. Currently, <strong>all SRs utilize the same software, java-tron</strong>. If a critical vulnerability were discovered in this software, it could potentially <strong>halt the entire Tron network</strong>. On November 2nd, 2021, the network was <strong>paused for 2 hours</strong> due to a `&quot;`malicious contract`&quot;` targeting an SR.</p>

<h2 className={subtitle()}>4. Governance:</h2>

<p>While the Tron network allows <strong>anyone to propose improvements</strong> through Github, the ultimate decision on <strong>network upgrades and updates</strong> rests primarily with the <strong>Tron Core team</strong>. This <strong>centralized decision-making</strong> structure contradicts the core principles of decentralization and limits community involvement in shaping the network&apos;s future.</p>
<Divider className="my-4" />

<h3 className={subtitle()}>Reference:</h3>
<ul className={"list-disc list-inside"} >


    <li><Link href="https://www.coindesk.com/tech/2020/11/02/tron-blockchain-stalled-for-hours-by-malicious-contract-justin-sun-says/" target="_blank">Tron Blockchain Stalled for Hours by &apos;Malicious Contract&apos;: Sun - CoinDesk</Link></li>
    <li><Link href="https://www.zdnet.com/article/tron-critical-security-flaw-could-break-the-entire-blockchain/" target="_blank">TRON critical security flaw could break the entire blockchain | ZDNET</Link></li>
    <li><Link href="https://github.com/tronprotocol/pm/blob/master/README.md" target="_blank">pm/README.md at master · tronprotocol/pm (github.com)</Link></li>
</ul>

</div>
    );
};