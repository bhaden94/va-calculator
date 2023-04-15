import { EntitlementDataRow } from "../types/EntitlementModel";
import { createContext, useContext, useState } from "react";

interface EntitlementDataContextValue {
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
type EntitlementDataProviderProps = { children: React.ReactNode };

const EntitlementDataContext = createContext<
	EntitlementDataContextValue | undefined
>(undefined);

function EntitlementDataProvider({ children }: EntitlementDataProviderProps) {
	const [chosenEntitlementDataRow, setChosenEntitlementDataRow] =
		useState<EntitlementDataRow | null>(null);
	const [originalLoanAmount, setOriginalLoanAmount] = useState<string | null>(
		null
	);
	const [newHomePrice, setNewHomePrice] = useState<string | null>(null);

	return (
		<EntitlementDataContext.Provider
			value={{
				chosenEntitlementDataState: {
					chosenEntitlementDataRow,
					setChosenEntitlementDataRow,
				},
				originalLoanAmountState: {
					originalLoanAmount,
					setOriginalLoanAmount,
				},
				newHomePriceState: {
					newHomePrice,
					setNewHomePrice,
				},
			}}
		>
			{children}
		</EntitlementDataContext.Provider>
	);
}

function useEntitlementDataInput() {
	const context = useContext(EntitlementDataContext);
	if (context === undefined) {
		throw new Error(
			"useEntitlementData must be used within an EntitlementDataProvider"
		);
	}
	return context;
}

export { EntitlementDataProvider, useEntitlementDataInput };
