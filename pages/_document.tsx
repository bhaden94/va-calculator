import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="Veterans Affairs calculators." content="" />
				{/* <!-- ****** faviconit.com favicons ****** --> */}
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
				<link rel="icon" type="image/png" sizes="196x196" href="/favicon-192.png" />
				<link rel="icon" type="image/png" sizes="160x160" href="/favicon-160.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
				<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
				<link rel="apple-touch-icon" href="/favicon-57.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
				<meta name="msapplication-TileColor" content="#FFFFFF" />
				<meta name="msapplication-TileImage" content="/favicon-144.png" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				{/* <!-- ****** faviconit.com favicons ****** --> */}
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
