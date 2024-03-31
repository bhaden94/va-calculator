import { useEffect, useRef } from "react";
import { EntitlementDataRow } from "../types/EntitlementModel";
import { VariableSizeList } from "react-window";
import { createFilterOptions } from "@mui/material";

export const LISTBOX_PADDING = 8; // px

export function useResetCache(data: any) {
  const ref = useRef<VariableSizeList>(null);
  useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

export const filterOptions = createFilterOptions({
  stringify: ({ zipCode, county, state }: EntitlementDataRow) =>
    `${zipCode}, ${county}, ${state}`,
});
