import { Autocomplete, TextField } from "@mui/material";
import { EntitlementDataRow } from "../../types/EntitlementModel";
import { FC } from "react";
import { ListboxComponent } from "./ListboxComponent";
import { LocationAutocompleteConstants } from "../../EntitlementCalcConstants";
import React from "react";
import { StyledPopper } from "./StyledPopper";
import { filterOptions } from "../../utils/locationAutocompleteUtils";
import { inputMarginStyle } from "./LocationAutocompleteStyles";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";

interface ILocationAutocompleteProps {
	entitlementData: EntitlementDataRow[];
}

export const LocationAutocomplete: FC<ILocationAutocompleteProps> = ({
	entitlementData,
}) => {
	const { chosenEntitlementDataState } = useEntitlementDataInput();

	return (
		<div style={{ width: "100%" }}>
			<Autocomplete
				id="location-autocomplete"
				fullWidth
				sx={inputMarginStyle}
				onChange={(e: any, newValue: EntitlementDataRow | null) => {
					chosenEntitlementDataState.setChosenEntitlementDataRow(
						newValue
					);
				}}
				disableListWrap
				blurOnSelect
				openOnFocus
				PopperComponent={StyledPopper}
				ListboxComponent={ListboxComponent}
				options={entitlementData}
				groupBy={(option) => option.state}
				filterOptions={filterOptions}
				getOptionLabel={(option) =>
					`${option.zipCode}, ${option.county}, ${option.state}`
				}
				renderInput={(params) => (
					<TextField
						{...params}
						label={
							LocationAutocompleteConstants.locationDropdownLabelText
						}
					/>
				)}
				renderOption={(props, option, state) =>
					[props, option, state.index] as React.ReactNode
				}
				renderGroup={(params) => params as unknown as React.ReactNode}
			/>
		</div>
	);
};
