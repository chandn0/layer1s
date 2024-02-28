import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";



export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-0">
			<div className="inline-block  text-center justify-center">
				{/* <h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1> */}
				<h2 className={subtitle()}>
				This website is an effort created to measure key metrics such as decentralization, censorship resistance, liveliness, and governance updates on layer1s. The goal is to guide the community in investing their time and money in the areas that are required to strengthen the layer1s. 
				</h2>
				<h2 className={subtitle()}>
                Caution: This is still in an early stage, and our methods and metrics may be subject to error. 
				</h2>
			</div>

			
			{/* <div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
		</section>
	);
}
