import { Box, SxProps, Theme } from "@mui/material";
import { EntitlementDataProvider } from "./context/EntitlementDataContext";
import { EntitlementDataRow } from "./types/EntitlementModel";
import { FC } from "react";
import { HomePriceInput } from "./components/HomePriceInput/HomePriceInput";
import { LocationAutocomplete } from "./components/LocationAutocomplete/LocationAutocomplete";
import { NavBarExtension } from "./components/NavBarExtension/NavBarExtension";
import { PageInformation } from "./components/PageInformation/PageInformation";

interface ICoreEntitlementCalcComponentProps {
	entitlementData: EntitlementDataRow[];
}

const outerBoxRow: SxProps<Theme> = {
	display: { sm: "flex" },
	flexDirection: { sm: "row-reverse" },
	gap: "2rem",
};

const innerBoxColumn: SxProps<Theme> = {
	display: { sm: "flex" },
	flexDirection: { sm: "column" },
	flexBasis: { sm: "100%" },
	margin: {
		sm: "2rem 1rem",
		md: "3rem 3rem",
		lg: "4rem 5rem",
	},
};

const inputsBox: SxProps<Theme> = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: {
		xs: "200px 25px 0",
		sm: "0",
	},
};

export const CoreEntitlementCalcComponent: FC<
	ICoreEntitlementCalcComponentProps
> = ({ entitlementData }) => {
	return (
		<Box sx={outerBoxRow}>
			<EntitlementDataProvider>
				<Box sx={innerBoxColumn}>
					<NavBarExtension />
				</Box>
				<Box sx={innerBoxColumn}>
					<Box sx={inputsBox}>
						<PageInformation />
						<LocationAutocomplete
							entitlementData={entitlementData}
						/>
						<HomePriceInput />
					</Box>
				</Box>
			</EntitlementDataProvider>
		</Box>
	);
};
