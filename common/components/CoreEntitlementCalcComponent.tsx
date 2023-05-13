import { Box, SxProps, Theme } from "@mui/material";
import { EntitlementDataProvider } from "../context/EntitlementDataContext";
import { EntitlementDataRow } from "../types/EntitlementModel";
import { FC } from "react";
import { HomePriceInput } from "./HomePriceInput/HomePriceInput";
import { LocationAutocomplete } from "./LocationAutocomplete/LocationAutocomplete";
import { NavBarExtension } from "./NavBarExtension/NavBarExtension";
import { PageInformation } from "./PageInformation/PageInformation";

interface ICoreEntitlementCalcComponentProps {
	entitlementData: EntitlementDataRow[];
	children: React.ReactNode;
}

const sharedStyles: SxProps<Theme> = {
	width: { lg: "1200px" },
	backgroundColor: "#fff",
};

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
> = ({ entitlementData, children }) => {
	return (
		<>
			<EntitlementDataProvider>
				<Box sx={{ ...outerBoxRow, ...sharedStyles }}>
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
				</Box>
			</EntitlementDataProvider>
			<Box sx={sharedStyles}>{children}</Box>
		</>
	);
};
