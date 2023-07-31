import {
	PrivacyPolicyPageDescription,
	PrivacyPolicyPageTitleText,
} from "../../features/privacy-policy/PrivacyPolicyConstants";
import { SxProps, Theme } from "@mui/material";
import { CorePrivacyPolicyComponent } from "../../features/privacy-policy/CorePrivacyPolicyComponent";
import Head from "next/head";
import { PageContainer } from "../../common/components/SharedComponents/PageContainer";

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
			<PageContainer additionalStyles={privacyPolicyStyles}>
				<CorePrivacyPolicyComponent />
			</PageContainer>
		</>
	);
};

export default PrivacyPolicy;
