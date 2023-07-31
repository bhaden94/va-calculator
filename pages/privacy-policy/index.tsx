import { Box, SxProps, Theme } from "@mui/material";
import {
	PrivacyPolicyPageDescription,
	PrivacyPolicyPageTitleText,
} from "../../features/privacy-policy/PrivacyPolicyConstants";
import { CorePrivacyPolicyComponent } from "../../features/privacy-policy/CorePrivacyPolicyComponent";
import Head from "next/head";

const PrivacyPolicy = () => {
	const privacyPolicyStyles: SxProps<Theme> = {
		padding: {
			xs: "1rem",
			sm: "2rem",
			md: "3rem",
			lg: "4rem",
		},
	};

	return (
		<>
			<Head>
				<title>{PrivacyPolicyPageTitleText}</title>
				<meta
					name="description"
					content={PrivacyPolicyPageDescription}
				/>
			</Head>
			<Box sx={privacyPolicyStyles}>
				<CorePrivacyPolicyComponent />
			</Box>
		</>
	);
};

export default PrivacyPolicy;
