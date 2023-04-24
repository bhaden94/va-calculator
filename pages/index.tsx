import { EntitlementDataProvider } from "../common/context/EntitlementDataContext";
import { EntitlementDataRow } from "../common/types/EntitlementModel";
import Head from "next/head";
import { HomePriceInput } from "../common/components/HomePriceInput/HomePriceInput";
import { LocationAutocomplete } from "../common/components/LocationAutocomplete/LocationAutocomplete";
import NavBar from "../common/components/NavBar/NavBar";
import { NavBarExtension } from "../common/components/NavBarExtension/NavBarExtension";
import React from "react";
import { SecondTierEntitlementWebpageText } from "../common/components/EntitlementCalcConstants";
import { ThemeProvider } from "@mui/material";
import { getNonOptimizedData } from "../common/utils/localData";
import styles from "../styles/Home.module.css";
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
				<main style={{ marginTop: appBarHeight }}>
					<EntitlementDataProvider>
						<NavBarExtension />
						<div className={styles.main}>
							<LocationAutocomplete
								entitlementData={nonOptimizedData}
							/>
							<HomePriceInput />
						</div>
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
