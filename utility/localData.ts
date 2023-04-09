import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { CSVRow } from "../model/EntitlementModel";

const DATA_FOLDER: string = "data";
const DATA_FILE_NAME_2023: string = "2023_us_entitlement_data.csv";

export async function getLocalCSVData(): Promise<CSVRow[]> {
	const filePath = path.join(process.cwd(), DATA_FOLDER, DATA_FILE_NAME_2023);
	const fileContent = await fs.readFileSync(filePath, "utf-8");
	const { data } = Papa.parse<CSVRow>(fileContent, { header: true });

	return data;
}
