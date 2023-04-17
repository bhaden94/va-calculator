import { EntitlementDataRow } from "../types/EntitlementModel";
import { EntitlementDataContextValue } from "../types/EntitlementDataContextValue";
import { createContext, useState } from "react";

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

export { EntitlementDataProvider, EntitlementDataContext };
