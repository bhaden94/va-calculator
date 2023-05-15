import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="Veterans Affairs calculators."
					content=""
				/>
				<link rel="icon" href="/favicon.svg" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Sofia+Sans+Semi+Condensed:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#fff" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
