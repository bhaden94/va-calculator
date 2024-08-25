import { EntitlementDataRow } from "../types/EntitlementModel";
import Papa from "papaparse";
import fs from "fs";
import path from "path";

const DATA_FOLDER: string = "data";
const DATA_FILE_NAME_2023: string = "2023_us_entitlement_data.csv";
const DATA_FILE_NAME_2024: string = "2024_us_entitlement_data.csv";

export const getEntitlementData = (): EntitlementDataRow[] => {
	const filePath = path.join(process.cwd(), DATA_FOLDER, DATA_FILE_NAME_2024);
	// Keep synchronous so we don't have file reading issues with multiple requests
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data } = Papa.parse<EntitlementDataRow>(fileContent, {
		header: true,
	});
	return data;
	``;
};
