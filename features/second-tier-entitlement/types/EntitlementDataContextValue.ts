import { EntitlementDataRow } from "./EntitlementModel";

export interface EntitlementDataContextValue {
	chosenEntitlementDataState: {
		chosenEntitlementDataRow: EntitlementDataRow | null;
		setChosenEntitlementDataRow: React.Dispatch<
			React.SetStateAction<EntitlementDataRow | null>
		>;
	};
	originalLoanAmountState: {
		originalLoanAmount: string | null;
		setOriginalLoanAmount: React.Dispatch<
			React.SetStateAction<string | null>
		>;
	};
	newHomePriceState: {
		newHomePrice: string | null;
		setNewHomePrice: React.Dispatch<React.SetStateAction<string | null>>;
	};
}