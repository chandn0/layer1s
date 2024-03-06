"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";
import m7 from  "../public/m7.png";
import m8 from  "../public/m8.png";
import {Divider} from "@nextui-org/react";

import {Link} from "@nextui-org/react";

import Image from "next/image";

export const Bitcoin = () => {
    return(
        <div>
            <br/>
            <h1 className={title()}>
					Bitcoin
				</h1> 
            <h2 className={subtitle()}>1. Network Security:</h2>
<Image alt="" src={m7} />

<p><strong>51% Attack:</strong> The most significant security risk to Bitcoin is a <strong>51% attack</strong>, where an entity controls over half of the network`&apos;`s mining power. This allows them to potentially double-spend coins and disrupt network operations.</p>

<p><strong>Estimating Attack Cost:</strong> Calculating the cost of a 51% attack involves factors like:</p>

<ul>
    <li><strong>Active ASICs:</strong> The number of actively mining <strong>ASICs</strong> (specialized mining hardware) can be estimated using tools like MINE-MATCH. Multiplying this number by 51% provides a rough estimate of the required hardware.</li>
    <li><strong>Manufacturing Cost:</strong> While some models may be vulnerable to reverse-engineering, the cost of manufacturing ASICs at scale (e.g., S9 model) is significant, reaching billions of dollars.</li>
</ul>

<p><strong>Accounting for all scenarios:</strong> Including operational costs like electricity, the estimated cost of a 51% attack has never been higher, ranging from <strong>$5 billion to $22 billion USD</strong>.</p>

<h2 className={subtitle()}>2. Censorship Resistance: </h2>
<Image alt="" src={m8} />
<p>
Large Mining Pools:Entities like Foundry USA and Antpool control a significant portion (56%) of mining power. While not direct censorship, these entities could be pressured by governments to restrict specific transactions, potentially impacting network neutrality. </p>

<h2 className={subtitle()}>3. Liveliness: </h2>
<p><strong>Impressive Uptime:</strong> The Bitcoin network has maintained <strong>100% uptime since 2013</strong>, demonstrating its robustness.</p>

    <p><strong>Distributed Infrastructure:</strong> Network downtime would require the simultaneous failure of all nodes and miners, currently estimated at over <strong>18,196 nodes</strong>. This extreme scenario is highly improbable.</p>

<h2 className={subtitle()}>4. Governance: Political Decentralization </h2>
<p><strong>Decentralized Decision-Making:</strong> Updates to the Bitcoin network are <strong>decentralized</strong>, meaning no single entity controls the process.</p>

<p><strong>Soft Forks:</strong> Network upgrades are typically implemented through <strong>soft forks</strong>, ensuring backward compatibility and preventing disruptions for miners who haven`&apos;`t updated their software.</p>
<Divider className="my-4" />

<h3 className={subtitle()}>Reference:</h3>
<ul className={"list-disc list-inside"} >
        <li><Link href="https://trustmachines.co/learn/what-are-soft-forks-and-how-have-they-impacted-bitcoin/" target="_blank">Soft Forks: How Do They Impact Bitcoin? | Trust Machines</Link></li>
        <li><Link href="https://bitnodes.io/" target="_blank">Reachable Bitcoin Nodes - Bitnodes</Link></li>
        <li><Link href="https://www.blockchain.com/explorer/charts/pools" target="_blank">Blockchain.com | Charts - Hashrate Distribution</Link></li>
        <li><Link href="https://b10c.me/observations/08-missing-sanctioned-transactions/?t" target="_blank">Six OFAC-sanctioned transactions missing (b10c.me)</Link></li>
        <li><Link href="https://labs.coinmetrics.io/" target="_blank">Bitcoin MINE-MATCH (coinmetrics.io)</Link></li>
    </ul>
</div>
    );
};