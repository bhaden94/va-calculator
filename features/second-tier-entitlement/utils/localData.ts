import { EntitlementDataRow } from "../types/EntitlementModel";
import Papa from "papaparse";
import fs from "fs";
import path from "path";

const DATA_FOLDER: string = "data";
const DATA_FILE_NAME: string = "{year}_us_entitlement_data.csv";

/**
 * Gets the entitlement data for the most recent year, starting with the passed in year param.
 * Checks if a file exists for the given year, and if not, decrements the year until it finds a file or reaches 2023.
 * @param year The year to attempt getting data for.
 * @returns The full data set for the most recent year available, starting with the passed in year param.
 */
export const getEntitlementData = (year: number): EntitlementDataRow[] => {
	// Test if file exists for the given year
	// If not, decrement one year until we find a file or reach 2023
	let fileExists = false;
	let currentYear = year;

	while (!fileExists && currentYear >= 2023) {
		const filePath = path.join(
			process.cwd(),
			DATA_FOLDER,
			DATA_FILE_NAME.replace("{year}", currentYear.toString()),
		);
		if (fs.existsSync(filePath)) {
			fileExists = true;
		} else {
			currentYear--;
		}
	}

	if (!fileExists) {
		throw new Error(
			`No data file found for year ${year} or any previous year down to 2023.`,
		);
	}

	const filePath = path.join(
		process.cwd(),
		DATA_FOLDER,
		DATA_FILE_NAME.replace("{year}", currentYear.toString()),
	);

	// Keep synchronous so we don't have file reading issues with multiple requests
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data } = Papa.parse<EntitlementDataRow>(fileContent, {
		header: true,
	});
	return data;
};
