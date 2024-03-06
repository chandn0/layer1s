import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { DataTable } from "@/components/datatable";
import { Ethereum } from "@/components/ethereum";
import { Solana } from "@/components/solana";
import {Tabs1} from "@/components/tabs";
import {Divider} from "@nextui-org/react";

import { Link } from "@nextui-org/link";
import clsx from "clsx";



export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/1697867.webp",
		shortcut: "/1697867.webp",
		apple: "/1697867.webp",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
					{/* <Navbar />  */}
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
							<Divider className="my-4" />
							<DataTable />
							<Divider className="my-4" />
							<Tabs1 />
						</main>
						<Divider className="my-4" />
						<footer className="w-full flex items-center justify-center py-3">
							<div
								className="flex items-center gap-1 text-current"
							>
								<span className="text-default-600">Improve mertics by creating PR or report issues at </span>
								<Link isExternal className="text-primary" href="https://github.com/chandn0/layer1s">GitHub</Link> 
								||  
								<span className="text-default-600">Made by</span>
								<Link isExternal className="text-primary" href="https://twitter.com/chandan1_">Chandan</Link> &
								<Link isExternal className="text-primary" href="https://twitter.com/LeonWaidmann">Leon</Link>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
