"use client";

import { EntitlementDataContext } from "../context/EntitlementDataContext";
import { EntitlementDataContextValue } from "../types/EntitlementDataContextValue";
import { useContext } from "react";

export function useEntitlementDataInput(): EntitlementDataContextValue {
  const context = useContext(EntitlementDataContext);
  if (context === undefined) {
    throw new Error(
      "useEntitlementData must be used within an EntitlementDataProvider",
    );
  }
  return context;
}
