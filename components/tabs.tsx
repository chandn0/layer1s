// app/tabs/page.tsx
"use client";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import { Ethereum } from "@/components/ethereum";
import { Solana } from "@/components/solana";
import { Bitcoin } from "@/components/bitcoin";
import { BSC } from "@/components/BSC";
import { Tron } from "@/components/tron";

export const  Tabs1=() => {


  return (
    <Tabs  aria-label="Options">
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
      <Tab key="BSC" title="BSC" >
        <Card>
          <CardBody>
          <BSC/>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="tron" title="Tron" >
        <Card>
          <CardBody>
          <Tron/>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}