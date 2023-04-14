import { EntitlementDataRow } from "../types/EntitlementModel";
import { createContext, useContext, useState } from "react";

interface EntitlementDataContextValue {
	chosenEntitlementDataRow: EntitlementDataRow | null;
	setChosenEntitlementDataRow: React.Dispatch<
		React.SetStateAction<EntitlementDataRow | null>
	>;
}
type EntitlementDataProviderProps = { children: React.ReactNode };

const EntitlementDataContext = createContext<
	EntitlementDataContextValue | undefined
>(undefined);

function EntitlementDataProvider({ children }: EntitlementDataProviderProps) {
	const [chosenEntitlementDataRow, setChosenEntitlementDataRow] =
		useState<EntitlementDataRow | null>(null);
	return (
		<EntitlementDataContext.Provider
			value={{
				chosenEntitlementDataRow: chosenEntitlementDataRow,
				setChosenEntitlementDataRow: setChosenEntitlementDataRow,
			}}
		>
			{children}
		</EntitlementDataContext.Provider>
	);
}

function useChosenEntitlementDataRow() {
	const context = useContext(EntitlementDataContext);
	if (context === undefined) {
		throw new Error(
			"useEntitlementData must be used within an EntitlementDataProvider"
		);
	}
	return context;
}

export { EntitlementDataProvider, useChosenEntitlementDataRow };
