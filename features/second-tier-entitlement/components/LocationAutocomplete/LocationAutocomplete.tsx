"use client";

import { Autocomplete, TextField } from "@mui/material";
import { EntitlementDataRow } from "../../types/EntitlementModel";
import { FC, useState } from "react";
import { ListboxComponent } from "./ListboxComponent";
import { LocationAutocompleteConstants } from "../../EntitlementCalcConstants";
import React from "react";
import { StyledPopper } from "./StyledPopper";
import { inputMarginStyle } from "./LocationAutocompleteStyles";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";
import useDebouncedFetch from "../../../../common/hooks/useDebouncedFetch";

const LocationAutocomplete: FC = () => {
  const { chosenEntitlementDataState } = useEntitlementDataInput();
  const [searchData, setSearchData] = useState<string>();
  const { data, isLoading } = useDebouncedFetch<EntitlementDataRow>(
    "/api/second-tier-entitlement",
    searchData,
  );

  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        id="location-autocomplete"
        fullWidth
        sx={inputMarginStyle}
        onChange={(_: any, newValue: EntitlementDataRow | null) => {
          chosenEntitlementDataState.setChosenEntitlementDataRow(newValue);
          setSearchData("");
        }}
        onInputChange={(_, newInputValue) => {
          // Need at least 3 character input before searching
          if (newInputValue.length < 3) return;
          setSearchData(newInputValue);
        }}
        disableListWrap
        blurOnSelect
        openOnFocus
        PopperComponent={StyledPopper}
        ListboxComponent={ListboxComponent}
        options={data}
        noOptionsText="Search by zip code, county, or state."
        loading={isLoading}
        groupBy={(option) => option.state}
        filterOptions={(x) => x}
        getOptionLabel={(option) =>
          `${option.zipCode}, ${option.county}, ${option.state}`
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={LocationAutocompleteConstants.locationDropdownLabelText}
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

export default LocationAutocomplete;
