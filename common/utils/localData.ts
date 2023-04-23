import {
	EntitlementDataRow,
	OptimizedEntitlementData,
} from "../types/EntitlementModel";
import Papa from "papaparse";
import fs from "fs";
import path from "path";

const DATA_FOLDER: string = "data";
const DATA_FILE_NAME_2023: string = "2023_us_entitlement_data.csv";

const optimizeDataForZipCodeQuery = (
	entitlementData: EntitlementDataRow[]
): OptimizedEntitlementData => {
	let optimizedData: OptimizedEntitlementData = {};
	entitlementData.forEach((row) => (optimizedData[row.zipCode] = { ...row }));
	return optimizedData;
};

export const getLocalEntitlementData = (): OptimizedEntitlementData => {
	const filePath = path.join(process.cwd(), DATA_FOLDER, DATA_FILE_NAME_2023);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data } = Papa.parse<EntitlementDataRow>(fileContent, {
		header: true,
	});

	return optimizeDataForZipCodeQuery(data);
};

export const getNonOptimizedData = (): EntitlementDataRow[] => {
	const filePath = path.join(process.cwd(), DATA_FOLDER, DATA_FILE_NAME_2023);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data } = Papa.parse<EntitlementDataRow>(fileContent, {
		header: true,
	});
	return data;
};
