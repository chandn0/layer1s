"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";
import m1 from  "../public/m1.png";
import m2 from  "../public/m2.png";
import m3 from  "../public/m3.png";
import m4 from  "../public/m4.png";

import Image from "next/image";

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
“We estimate an attack on Ethereum would take 6 months due to the churn limit preventing stake from being deployed all at once.

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
</p></div>
    );
};