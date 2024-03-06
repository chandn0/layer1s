"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";
import m1 from  "../public/m1.png";
import m2 from  "../public/m2.png";
import m3 from  "../public/m3.png";
import m4 from  "../public/m4.png";

import Image from "next/image";
import {Divider} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

export const Ethereum = () => {
    return(
        <div>
            <br/>
            <h1 className={title()}>
					Ethereum
				</h1> 
            <h2 className={subtitle()}>1. Network Security - Validator Distribution:</h2>
          <Image alt="" src={m1} />
            <p>
Presently, there are 958,000 validators, and each validator is required to stake 32 ETH, resulting in a total staked amount of 30 million ETH.
`&quot;`We estimate an attack on Ethereum would take 6 months due to the churn limit preventing stake from being deployed all at once.

That would cost over 34B USD. The attacker would have to manage over 200 nodes and spend 1M USD on AWS alone.

We also find no ways for a nation-state attacker to continuously run a 51% / 34% attack if the goal is to destroy these networks.

This is the first empirical evidence of Nash Equilibrium in Ethereum where adversarial actions become unattractive when compared to other strategies, such as honest participation in the network or abstention from attacking.”

As the network grows, it becomes increasingly challenging and eventually impossible to attack. </p>

<h2 className={subtitle()}>2. Censorship Resistance: </h2>
<Image alt="" src={m2} />
<p>
Censorship resistance is one of the core values of Ethereum. Presently, users can face censorship at various layers of the stack. Builders can exclusively build blocks that don`&apos;`t contain certain transactions, relays can refuse to relay them, and validators can construct local blocks that strictly exclude certain entities or only connect to censoring relays.


Staking service providers:
<Image alt="" src={m3} />

Even though Lido has 31.4% of ETH staked, it serves as an intermediary layer facilitating interaction between Ethereum users and transparent, well-known Node Operators (NOs).

“This process is underpinned by a network of 40+ legitimate and autonomous NOs. These NOs are not only geographically dispersed, but each of them individually holds less than 1.5% of the total staked assets. Lido DAO can not censor the transaction; it`&apos;`s up to the Node Operators.

The censorship threat comes from entities like Coinbase, Binance, Figment, Kraken, which are centralized entities that will censor transactions to stay OFAC Compliant. These centralized entities currently account for more than 30% of ETH staked.

Beyond 50%, these entities can censor the network. </p>

<h2 className={subtitle()}>3. Liveliness: </h2>
<Image alt="" src={m4} />
<p>
The liveliness of an Ethereum network depends mainly on the Consensus and Execution layers of Ethereum.

While many understand that client diversity is important for a more resilient network, they may not fully grasp why or how essential it is. It`&apos;`s not merely important; it`&apos;`s critical. If a single client is used by 2/3rds (66%) of validators, there`&apos;`s a significant risk that this can disrupt the chain and result in monetary loss for node operators.

It takes 2/3rds of validators to reach finality. If a client with 66%+ of market share has a bug and forks to its own chain, it will be capable of finalizing. Once the fork finalizes, validators cannot return to the real chain without being slashed. If 66% of the chain gets slashed simultaneously, the penalty is the entire 32 ETH.

So why is 50% market share still dangerous? If a minority client forks, the 50%+ majority client can obtain a 66%+ majority. With no client having a market share over 33%, these scenarios are avoided. That`&apos;`s why 33% market share is the goal for all clients.

These risks mentioned above apply to both consensus clients and execution clients equally.

Consensus clients are fairly diversified with Prysm, Lighthouse, Teku, Nimbus. However, Prysm has a 37.72% market share, which is not ideal. Prysm at 38%, with any client bug over 33.3%, could mean a loss of finality.

Execution clients are not evenly distributed, with Geth having an 83% market share, Nethermind- 14%, Besu- 10%. Geth`&apos;`s 83% supermajority could cause a chain split.
</p>
<h2 className={subtitle()}>4. Governance: Political Decentralization </h2>
<p>Anyone can propose changes to Ethereum.
- Three primary resources for researching these proposals include:
    - The EIP repository (https://eips.ethereum.org/)
    - Ethereum Magicians (https://ethereum-magicians.org/)
    - ethresear.ch (https://ethresear.ch/)
The Ethereum governance process prioritizes openness and inclusivity, which can sometimes lead to a trade-off between speed and efficiency.
GitHub is the only single point of failure, based on actions taken by Github surrounding the Tornado Cash repository.</p>
<Divider className="my-4" />

<h3 className={subtitle()}>Reference:</h3>
<ul className={"list-disc list-inside"} >
        <li><Link href="https://beaconcha.in/charts/validators" target="_blank">Validators Chart - Open Source Ethereum Blockchain Explorer - beaconcha.in - 2024</Link></li>
        <li><Link href="https://notes.ethereum.org/@djrtwo/risks-of-lsd" target="_blank">The Risks of LSD - HackMD (ethereum.org)</Link></li>
        <li><Link href="https://www.halborn.com/blog/post/ethereum-security-overview" target="_blank">Ethereum Security Overview (halborn.com)</Link></li>
        <li><Link href="https://censorship.pics/" target="_blank">Censorship.pics</Link></li>
        <li><Link href="https://dune.com/queries/2394100/3928083" target="_blank">ETH Stakers (dune.com)</Link></li>
        <li><Link href="https://clientdiversity.org/" target="_blank">Client Diversity | Ethereum</Link></li>
        <li><Link href="https://www.rated.network/overview?network=mainnet&timeWindow=1d&rewardsMetric=average&geoDistType=pros&hostDistType=all&soloProDist=nodes" target="_blank">Network Overview | Ethereum Ethereum Mainnet (rated.network)</Link></li>
        <li><Link href="https://twitter.com/VitalikButerin/status/1247607628668309507" target="_blank">vitalik.eth on X: People who say full decentralization is overkill, you only need non-custodial are missing the point...</Link></li>
        <li><Link href="https://twitter.com/Ooojin482/status/1592608847444992001" target="_blank">Ooojin 🇺🇦 on X: What is decentralization? Here are 19 metrics of decentralization that make people on crypto Twitter yell at each other. A 🧵</Link></li>
        <li><Link href="https://nodewatch.io/" target="_blank">Nodewatch - Eth2 Node Analytics</Link></li>
        <li><Link href="https://twitter.com/mt_1466/status/1570517927061000192" target="_blank">MT on X: Security and decentralization are tough to quantify in crypto land Trust me, I`&apos;`ve tried (image) </Link></li>
        <li><Link href="https://news.earn.com/quantifying-decentralization-e39db233c28e" target="_blank">Quantifying Decentralization. We must be able to measure blockchain… | by Balaji S. Srinivasan | news.earn.com</Link></li>
        <li><Link href="https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274" target="_blank">The Meaning of Decentralization. “Decentralization” is one of the words… | by Vitalik Buterin | Medium</Link></li>
        <li><Link href="https://twitter.com/Justin_Bons/status/1759631000374567282" target="_blank">Justin Bons on X: What is decentralization & how do we really measure it? </Link></li>
        <li><Link href="https://vitalik.eth.limo/general/2017/12/17/voting.html" target="_blank">Notes on Blockchain Governance (eth.limo)</Link></li>
        <li><Link href="https://ethereum.org/en/governance/" target="_blank">Ethereum Governance | ethereum.org</Link></li>
    </ul>
</div>
    );
};