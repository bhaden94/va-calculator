import { Autocomplete, TextField } from "@mui/material";
import { EntitlementDataRow } from "../../../common/types/EntitlementModel";
import { FC } from "react";
import React from "react";
import { ListboxComponent } from "./ListboxComponent";
import { StyledPopper } from "./StyledPopper";
import { filterOptions } from "../../utils/locationAutocompleteUtils";

interface ILocationAutocompleteProps {
	entitlementData: EntitlementDataRow[];
}

export const LocationAutocomplete: FC<ILocationAutocompleteProps> = ({
	entitlementData,
}) => {
	return (
		<div style={{ width: "100%" }}>
			<Autocomplete
				id="virtualize-demo"
				fullWidth
				onChange={(e: any, newValue: EntitlementDataRow | null) => {
					console.log(newValue);
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
