import { Autocomplete, TextField } from "@mui/material";
import { EntitlementDataRow } from "../../../common/types/EntitlementModel";
import { FC } from "react";
import React from "react";
import { ListboxComponent } from "./ListboxComponent";
import { StyledPopper } from "./StyledPopper";
import { filterOptions } from "../../utils/locationAutocompleteUtils";
import { useEntitlementDataInput } from "../../hooks/EntitlementDataContext";

interface ILocationAutocompleteProps {
	entitlementData: EntitlementDataRow[];
}

export const LocationAutocomplete: FC<ILocationAutocompleteProps> = ({
	entitlementData,
}) => {
	const { chosenEntitlementDataState } = useEntitlementDataInput();

	// TODO: Handle rows with long text getting cut off on mobile.
	return (
		<div style={{ width: "100%" }}>
			<Autocomplete
				id="location-autocomplete"
				fullWidth
				sx={{ margin: "8px 0" }}
				onChange={(e: any, newValue: EntitlementDataRow | null) => {
					chosenEntitlementDataState.setChosenEntitlementDataRow(
						newValue
					);
				}}
				disableListWrap
				PopperComponent={StyledPopper}
				ListboxComponent={ListboxComponent}
				options={entitlementData}
				groupBy={(option) => option.state}
				filterOptions={filterOptions}
				getOptionLabel={(option) =>
					`${option.zipCode}, ${option.county}, ${option.state}`
				}
				renderInput={(params) => (
					<TextField {...params} label="Zip Code, County, State" />
				)}
				renderOption={(props, option, state) =>
					[props, option, state.index] as React.ReactNode
				}
				renderGroup={(params) => params as unknown as React.ReactNode}
			/>
		</div>
	);
};
