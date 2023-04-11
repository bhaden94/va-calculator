import { useState } from "react";
import {
	EntitlementDataRow,
	OptimizedEntitlementData,
} from "../common/types/EntitlementModel";
import styles from "../styles/Home.module.css";
import { getLocalEntitlementData } from "../common/utils/localData";
import { Button, TextField } from "@mui/material";

interface EntitlementDataProps {
	data: OptimizedEntitlementData;
}

const ZIP_CODE_REGEX = "^([0-9]{5})$";

const EntitlementData = ({ data }: EntitlementDataProps) => {
	const [zipCodeData, setZipCodeData] = useState<EntitlementDataRow>();
	const [zipCode, setZipCode] = useState<string>("");

	const recordZipCodeData = () => {
		setZipCodeData(data[zipCode]);
	};

	return (
		<>
			<main className={styles.main}>
				<div>
					<TextField
						label="Zip Code"
						variant="outlined"
						value={zipCode}
						onChange={(event) => setZipCode(event.target.value)}
						error={zipCode !== "" && !zipCode.match(ZIP_CODE_REGEX)}
						helperText={
							zipCode !== "" && !zipCode.match(ZIP_CODE_REGEX)
								? "Please enter a five digit zip code"
								: ""
						}
					/>
					<Button
						variant="contained"
						color="primary"
						onClick={recordZipCodeData}
					>
						Submit
					</Button>
					<p>{zipCodeData?.zipCode}</p>
					<p>{zipCodeData?.state}</p>
					<p>{zipCodeData?.county}</p>
					<p>{zipCodeData?.entitlement}</p>
				</div>
			</main>
		</>
	);
};

export function getStaticProps() {
	const entitlementData = getLocalEntitlementData();
	return { props: { data: entitlementData } };
}

export default EntitlementData;
