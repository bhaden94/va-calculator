import { ThemeProvider } from "@mui/material";
import { EntitlementDataRow } from "../common/types/EntitlementModel";
import Head from "next/head";
import NavBar from "../common/components/NavBar/NavBar";
import { NavBarExtension } from "../common/components/NavBarExtension/NavBarExtension";
import React from "react";
import { getNonOptimizedData } from "../common/utils/localData";
import styles from "../styles/Home.module.css";
import { theme } from "../common/utils/theme";
import useAppBarHeight from "../common/hooks/useAppBarHeight";
import { useState } from "react";
import { LocationAutocomplete } from "../common/components/LocationAutocomplete/LocationAutocomplete";

interface EntitlementDataProps {
	nonOptimizedData: EntitlementDataRow[];
}

const EntitlementData = ({ nonOptimizedData }: EntitlementDataProps) => {
	const [zipCodeData, setZipCodeData] = useState<EntitlementDataRow | null>();
	const appBarHeight = useAppBarHeight();

	return (
		<>
			<Head>
				<title>VA Calculator - Second Tier Entitlement</title>
			</Head>
			<ThemeProvider theme={theme}>
				<NavBar />
				<main style={{ marginTop: appBarHeight }}>
					<NavBarExtension />
					<div className={styles.main}>
						<LocationAutocomplete entitlementData={nonOptimizedData} />
						<p style={{ color: "#000" }}>{zipCodeData?.zipCode}</p>
						<p style={{ color: "#000" }}>{zipCodeData?.state}</p>
						<p style={{ color: "#000" }}>{zipCodeData?.county}</p>
						<p style={{ color: "#000" }}>
							{zipCodeData?.entitlement}
						</p>
					</div>
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
