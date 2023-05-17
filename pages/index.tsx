import {
	BlogPost,
	BlogType,
} from "../common/components/SharedComponents/BlogPost";
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
				<meta
					name="description"
					content="The second tier entitlement calculator is used if you already have a VA loan
					and your used entitlement will not be restored prior to closing on your new home."
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<NavBar />
				<main
					style={{
						paddingTop: appBarHeight,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<CoreEntitlementCalcComponent
						entitlementData={nonOptimizedData}
					>
						<BlogPost blogType={BlogType.SecondTierEntitlement} />
					</CoreEntitlementCalcComponent>
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
