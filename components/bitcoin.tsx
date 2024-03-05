"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";
import m7 from  "../public/m7.png";
import m8 from  "../public/m8.png";


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

            <p>
            - 51% Attack:The most significant security risk to Bitcoin is a 51% attack, where an entity controls over half of the network's mining power. This allows them to potentially double-spend coins and disrupt network operations.
- Estimating Attack Cost:Calculating the cost of a 51% attack involves factors like:
    - Active ASICs:The number of actively mining ASICs(specialized mining hardware) can be estimated using tools like MINE-MATCH. Multiplying this number by 51% provides a rough estimate of the required hardware.
    - Manufacturing Cost:While some models may be vulnerable to reverse-engineering, the cost of manufacturing ASICs at scale (e.g., S9 model) is significant, reaching billions of dollars.
- Accounting for all scenarios:Including operational costs like electricity, the estimated cost of a 51% attack has never been higher, ranging from $5 billion to $22 billion USD.</p>

<h2 className={subtitle()}>2. Censorship Resistance: </h2>
<Image alt="" src={m8} />
<p>
Large Mining Pools:Entities like Foundry USA and Antpool control a significant portion (56%) of mining power. While not direct censorship, these entities could be pressured by governments to restrict specific transactions, potentially impacting network neutrality. </p>

<h2 className={subtitle()}>3. Liveliness: </h2>
<p>
- Impressive Uptime: The Bitcoin network has maintained 100% uptime since 2013, demonstrating its robustness.
- Distributed Infrastructure: Network downtime would require the simultaneous failure of all nodes and miners, currently estimated at over 18,196 nodes. This extreme scenario is highly improbable.
</p>
<h2 className={subtitle()}>4. Governance: Political Decentralization </h2>
<p>- Decentralized Decision-Making: Updates to the Bitcoin network are decentralized, meaning no single entity controls the process.
- Soft Forks: Network upgrades are typically implemented through soft forks, ensuring backward compatibility and preventing disruptions for miners who haven't updated their software.</p>

</div>
    );
};