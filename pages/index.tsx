import { Button, TextField, ThemeProvider } from "@mui/material";
import {
	EntitlementDataRow,
	OptimizedEntitlementData,
} from "../common/types/EntitlementModel";
import Head from "next/head";
import NavBar from "../common/components/NavBar/NavBar";
import { getLocalEntitlementData } from "../common/utils/localData";
import styles from "../styles/Home.module.css";
import { theme } from "../common/utils/theme";
import { useEffect, useState } from "react";
import { NavBarExtension } from "../common/components/NavBarExtension/NavBarExtension";
import useAppBarHeight from "../common/hooks/useAppBarHeight";

interface EntitlementDataProps {
	data: OptimizedEntitlementData;
}

const ZIP_CODE_REGEX = "^([0-9]{5})$";

const EntitlementData = ({ data }: EntitlementDataProps) => {
	const [zipCodeData, setZipCodeData] = useState<EntitlementDataRow>();
	const [zipCode, setZipCode] = useState<string>("");
	const appBarHeight = useAppBarHeight();

	useEffect(() => {
		setZipCodeData(data[zipCode]);
	}, [zipCode]);

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
						<TextField
							label="Zip Code"
							variant="outlined"
							fullWidth
							value={zipCode}
							onChange={(event) => setZipCode(event.target.value)}
							error={
								zipCode !== "" && !zipCode.match(ZIP_CODE_REGEX)
							}
							helperText={
								zipCode !== "" && !zipCode.match(ZIP_CODE_REGEX)
									? "Please enter a five digit zip code"
									: ""
							}
						/>
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
	const entitlementData = getLocalEntitlementData();
	return { props: { data: entitlementData } };
}

export default EntitlementData;
