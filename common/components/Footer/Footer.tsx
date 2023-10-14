import {
	HomePageTitleText,
	PrivacyPolicyConstants,
} from "../../../features/home/HomeConstants";
import { Paper, SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { CompanyLogo } from "../SharedComponents/CompanyLogo";
import { FC } from "react";
import Link from "@mui/material/Link";
import { Theme } from "@emotion/react";
import Typography from "@mui/material/Typography";

function Copyright() {
	return (
		<Typography variant="body2" color="#fff">
			{"Copyright © "}
			<Link color="inherit" href="/">
				{HomePageTitleText}
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

interface IFooterProps {
	footerHeight: number;
}

export const Footer: FC<IFooterProps> = ({ footerHeight }) => {
	const boxStyles: SxProps<Theme> = {
		height: footerHeight,
		display: "flex",
		justifyContent: "center",
	};

	const paperStyles: SxProps<Theme> = {
		display: "flex",
		flexDirection: "column",
		gap: ".5rem",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "initial",
		width: {
			xs: "100%",
			lg: "1200px",
		},
	};

	return (
		<Box component="footer" sx={boxStyles}>
			<Paper sx={paperStyles}>
				<CompanyLogo showTextLogo={true} height={40} />
				<Copyright />
				<Link href={PrivacyPolicyConstants.href}>
					{PrivacyPolicyConstants.title}
				</Link>
			</Paper>
		</Box>
	);
};
