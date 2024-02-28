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
	  Governance:"Working....",
	},
	{
		key: "2",
		Chain:"Bitcoin",
		NetworkSecurity: "Adding soon....",
		CensorshipResistance: "",
		Liveliness: "",
		Governance:"",
	  },	{
		key: "3",
		Chain:"Solana",
		NetworkSecurity: "Adding soon....",
		CensorshipResistance: "",
		Liveliness: "",
		Governance:"",
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