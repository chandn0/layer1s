"use client"
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue
  } from "@nextui-org/table";
  const rows = [
	{
	  key: "1",
	  Chain:"Ethereum",
	  NetworkSecurity: "It would cost over 34B USD. The attacker would have to manage over 200 nodes and spend 1M USD on AWS alone.There is no ways for a attacker to continuously run a 34% attack if the goal is to destroy these networks. ",
	  CensorshipResistance: "The censorship threat comes from entities like Coinbase, Binance, Figment, Kraken, which are centralized entities that will censor transactions to stay OFAC Compliant. These centralized entities currently account for more than 30% of ETH staked.",
	  Liveliness: "Execution clients are not evenly distributed, with Geth having an 83% market share. Geth's 83% supermajority could cause a chain split.",
	  Governance:"Anyone can propose changes to Ethereum. The Ethereum governance process prioritizes openness and inclusivity, which can sometimes lead to a trade-off between speed and efficiency.GitHub is the only single point of failure, based on actions taken by Github surrounding the Tornado Cash repository.",
	},
	{
		key: "2",
		Chain:"Bitcoin",
		NetworkSecurity: "Adding soon....",
		CensorshipResistance: "",
		Liveliness: "",
		Governance:"",
	  },	
	  {
		key: "3",
		Chain:"Solana",
		NetworkSecurity: "384 million SOL (86% circulating) is staked by 1,606 validators. Superminority: 20 validators control over 33% of stake. While collusion could halt the network, other validators would detect and stop the attack.",
		CensorshipResistance: "Data center concentration (70% of validators) raises censorship concerns as governments can pressure data centers to restrict Solana.",
		Liveliness: "Approximately 84% of validators continue to operate the Solana Labs Client. In the event of a bug, this concentration poses a risk as it could potentially lead to a complete network halt.",
		Governance:"Governance has centralization concerns, as the Labs team ultimately approves changes proposed through public pull requests.",
	  },
  ];
  
  const columns = [
	{
		key: "Chain",
		label: "Chain",
	  },
	{
	  key: "NetworkSecurity",
	  label: "Security",
	},
	{
	  key: "CensorshipResistance",
	  label: "Censorship Resistance",
	},
	{
	  key: "Liveliness",
	  label: "Liveliness",
	},
	{
	key: "Governance",
	label: "Governance",
	},
  ];

export const DataTable = () => {
	return ( 
		<div>
			<br/>
			<Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
		</div>
	);
};