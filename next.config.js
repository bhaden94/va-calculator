/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")()

const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ["common", "data", "pages", "styles"],
	},
};

module.exports = withMDX(nextConfig);
