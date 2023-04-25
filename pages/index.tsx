import { Box, ThemeProvider, Typography } from "@mui/material";
import { EntitlementDataProvider } from "../common/context/EntitlementDataContext";
import { EntitlementDataRow } from "../common/types/EntitlementModel";
import Head from "next/head";
import { HomePriceInput } from "../common/components/HomePriceInput/HomePriceInput";
import { LocationAutocomplete } from "../common/components/LocationAutocomplete/LocationAutocomplete";
import NavBar from "../common/components/NavBar/NavBar";
import { NavBarExtension } from "../common/components/NavBarExtension/NavBarExtension";
import { PageInformation } from "../common/components/PageInformation/PageInformation";
import React from "react";
import { SecondTierEntitlementWebpageText } from "../common/components/EntitlementCalcConstants";
import { getNonOptimizedData } from "../common/utils/localData";
import { theme } from "../common/utils/theme";
import useAppBarHeight from "../common/hooks/useAppBarHeight";

interface EntitlementDataProps {
	nonOptimizedData: EntitlementDataRow[];
}

const EntitlementData = ({ nonOptimizedData }: EntitlementDataProps) => {
	const appBarHeight = useAppBarHeight();

	return (
		<>
			<Head>
				<title>{SecondTierEntitlementWebpageText}</title>
			</Head>
			<ThemeProvider theme={theme}>
				<NavBar />
				<main
					style={{
						paddingTop: appBarHeight,
						height: "100vh",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<EntitlementDataProvider>
						<Box
							sx={{
								display: { sm: "flex" },
								flexDirection: { sm: "row-reverse" },
								width: { lg: "1200px" },
								backgroundColor: "#fff",
								gap: "2rem",
							}}
						>
							<Box
								sx={{
									display: { sm: "flex" },
									flexDirection: { sm: "column" },
									flexBasis: { sm: "100%" },
									margin: {
										sm: "2rem 1rem",
										md: "3rem 3rem",
										lg: "4rem 5rem",
									},
								}}
							>
								<NavBarExtension />
							</Box>
							<Box
								sx={{
									display: { sm: "flex" },
									flexBasis: { sm: "100%" },
									flexDirection: { sm: "column" },
									margin: {
										sm: "2rem 1rem",
										md: "3rem 3rem",
										lg: "4rem 5rem",
									},
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										padding: {
											xs: "200px 25px 0",
											sm: "0",
										},
									}}
								>
									<PageInformation />
									<LocationAutocomplete
										entitlementData={nonOptimizedData}
									/>
									<HomePriceInput />
								</Box>
							</Box>
						</Box>
					</EntitlementDataProvider>
				</main>
			</ThemeProvider>
		</>
	);
};

export async function getStaticProps() {
	//const entitlementData = getLocalEntitlementData();
	const nonOptimized = getNonOptimizedData();
	return { props: { nonOptimizedData: nonOptimized } };
}

export default EntitlementData;
