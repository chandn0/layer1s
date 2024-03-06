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
import { title, subtitle, } from "@/components/primitives";

  const rows = [
	{
	  key: "1",
	  Chain:"Ethereum",
	  NetworkSecurity: "Cost's over 34B USD, and require 200 nodes. =[9/10]",
	  CensorshipResistance: "Centralized entities like(Coinbase, Binance, Figment, Kraken) account for more than 30% of ETH staked. =[5/10]",
	  Liveliness: "Geth's 83% supermajority could cause a chain split.=[6/10]",
	  Governance:"Eth governance process prioritizes openness and inclusivity. =[8/10]",
	  Score:"=[28/40]",

	},
	{
		key: "2",
		Chain:"Bitcoin",
		NetworkSecurity: " The cost of a 51% attack has been ranging from $5 billion to $22 billion USD.=[8/10]",
		CensorshipResistance: "Entities like Foundry USA and Antpool control a significant portion (56%) of mining power.=[5/10]",
		Liveliness: "Maintained 100% uptime since 2013.=[10/10]",
		Governance:"Network upgrades are typically implemented through soft forks.=[9/10]",
		Score:"=[32/40]",
	  },	
	  {
		key: "3",
		Chain:"Solana",
		NetworkSecurity: "384 million SOL (86% circulating) is staked by 1,606 validators. =[6/10]",
		CensorshipResistance: "Data center concentration (70% of validators).=[3/10]",
		Liveliness: "84% of validators operate the Solana Labs Client.=[3/10]",
		Governance:"The Labs team ultimately approves changes proposed through public PRs.=[4/10]",
		Score:"=[16/40]",
	  },
	  {
		key: "4",
		Chain:"BSC",
		NetworkSecurity: "Validator set consisting of only 40 active validators.=[5/10]",
		CensorshipResistance: "As Binance's need to comply with regulations,it will censor the trax. =[2/10]",
		Liveliness: "76% of BSC validators utilize Erigon client.=[5/10]",
		Governance:"Upgrades are entirely controlled by the BNB team.=[3/10]",
		Score:"=[15/40]",
	  },
	  {
		key: "5",
		Chain:"Tron",
		NetworkSecurity: "27 elected Super Representatives securing the network. =[3/10]",
		CensorshipResistance: "majority of the 27 SR entities are located in the United State. =[3/10]",
		Liveliness: "all SRs utilize the same java-tron client. =[2/10]",
		Governance:"Network upgrades rests primarily with the Tron Core team. =[3/10] ",
		Score:"=[11/40]",
	  },
	  {
		key: "4",
		Chain:"Near",
		NetworkSecurity: "Adding soon..",
		CensorshipResistance: "",
		Liveliness: "",
		Governance:"",
	  },
	  {
		key: "4",
		Chain:"Cardano",
		NetworkSecurity: "Adding soon..",
		CensorshipResistance: "",
		Liveliness: "",
		Governance:"",
	  },
	  {
		key: "4",
		Chain:"Avalanche",
		NetworkSecurity: "Adding soon..",
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
	{
		key: "Score",
		label: "Total Score",
		},
  ];

export const DataTable = () => {
	return ( 
		<div>
			<br/>
			<Table isStriped aria-label="Example table with dynamic content">
      <TableHeader  columns={columns}>
        {(column) => <TableColumn className="text-xl" key={column.key}>{column.label}</TableColumn>}
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