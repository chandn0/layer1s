"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";
import m5 from  "../public/m5.png";
import m6 from  "../public/m6.png";


import Image from "next/image";

export const Solana = () => {
    return(
        <div>
            <br/>
            <h1 className={title()}>
					Solana
				</h1> 
            <h2 className={subtitle()}>1. Network Security - Validator Distribution:</h2>
            <p> Staking Distribution: A total of 383,945,204 SOL is staked by 1,606 validators. This represents 86% of the circulating SOL.

Superminority: The smallest number of validators needed to collectively control more than 33% of the total stake is 20. In theory, if these validators colluded, they could censor or halt the network. However, this is highly unlikely because other validators would detect an invalid blockchain fork and stop producing blocks, effectively halting the network. This security mechanism prevents attackers from altering the blockchain state and stealing funds.
</p>

<h2 className={subtitle()}>2. Censorship Resistance: </h2>
<Image alt="" src={m5} />
<p>
Currently, 70% of validators are hosted in data centers, this concentration raises concerns regarding potential censorship by governments. If governments pressure data centers to ban Solana validators or block specific transactions, it could hinder the network`&apos;`s ability to function freely. This concern intensifies as the technical requirements for running validators increase, potentially pushing more toward data center solutions and centralizing the network.
 </p>

<h2 className={subtitle()}>3. Liveliness: </h2>
<Image alt="" src={m6} />
<p>
Historically, Solana relied solely on a single validator client developed by Solana Labs. However, a significant shift occurred in August 2022 when Jito Labs introduced a second independent client, aiming to enhance network diversity. Despite this effort, approximately 84% of validators continue to operate the Solana Labs Client. In the unfortunate event of a bug, this concentration poses a risk as it could potentially lead to a complete network halt.

Notably, on February 6th, 2024, the Solana Mainnet Beta encountered a five-hour outage, marking the sixth major incident since its inception.</p>
<h2 className={subtitle()}>4. Governance: Political Decentralization </h2>
<p>While the current process for proposing changes to the Solana architecture involves open public proposals submitted through pull requests on the Solana GitHub repository, the final decision on accepting or rejecting these proposals rests with the Solana Labs team. This centralized decision-making raises concerns about a potential single point of failure in the governance process.</p>

</div>
    );
};