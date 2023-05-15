/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV !== "development",
	},
	eslint: {
		dirs: ["common", "data", "pages", "styles"],
	},
};

const pwaConfig = {
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === "development",
};

const withPWA = require("next-pwa")(pwaConfig);
const withMDX = require("@next/mdx")();

module.exports = withMDX(withPWA(nextConfig));
