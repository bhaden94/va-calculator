import { CoreEntitlementCalcComponent } from "../common/components/CoreEntitlementCalcComponent";
import { EntitlementDataRow } from "../common/types/EntitlementModel";
import Head from "next/head";
import NavBar from "../common/components/NavBar/NavBar";
import React from "react";
import { SecondTierEntitlementWebpageText } from "../common/components/EntitlementCalcConstants";
import { ThemeProvider } from "@mui/material";
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
					<CoreEntitlementCalcComponent
						entitlementData={nonOptimizedData}
					/>
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
