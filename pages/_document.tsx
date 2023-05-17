import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="Veterans Affairs calculators." content="" />
				<meta
					name="description"
					content="The Veterans Affairs (VA) calculator website is for 
					calculating different veteran benefits. Currently, the VA loan
					second tier entitlement is the main calculator."
				/>
				<link rel="icon" href="/favicon.svg" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Sofia+Sans+Semi+Condensed:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#fff" />
				<Script
					async
					src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENSE_ID}`}
					strategy="lazyOnload"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
