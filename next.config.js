/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ["common", "data", "pages", "styles"],
	},
};

module.exports = nextConfig;
