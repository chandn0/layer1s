// app/tabs/page.tsx
"use client";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import { Ethereum } from "@/components/ethereum";
import { Solana } from "@/components/solana";
import { Bitcoin } from "@/components/bitcoin";
export const  Tabs1=() => {


  return (
    <Tabs aria-label="Options">
      <Tab key="ethereum" title="Ethereum">
        <Card>
          <CardBody>
          <Ethereum/>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Solana" title="Solana" >
        <Card>
          <CardBody>
          <Solana/>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Bitcoin" title="Bitcoin" >
        <Card>
          <CardBody>
          <Bitcoin/>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}