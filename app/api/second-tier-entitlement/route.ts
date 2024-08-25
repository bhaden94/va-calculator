import { NextRequest, NextResponse } from "next/server";
import { getEntitlementData } from "../../../features/second-tier-entitlement/utils/localData";
import Fuse, { IFuseOptions } from "fuse.js";
import { EntitlementDataRow } from "../../../features/second-tier-entitlement/types/EntitlementModel";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const queryString = url.searchParams
    .get("query")
    ?.replaceAll(" ", "")
    .split(",");

  const nonOptimized = getEntitlementData();

  const options: IFuseOptions<EntitlementDataRow> = {
    includeScore: true,
    threshold: 0.2,
    distance: 50,
    useExtendedSearch: true,
    keys: ["zipCode", "county", "state", "entitlement"],
  };
  const fuse = new Fuse<EntitlementDataRow>(nonOptimized, options);
  // Advanced search splits parts of the zip code, county, and state
  // to perform an 'or' query
  const searchResult = queryString
    ? fuse.search(`${queryString.join("|")}`)
    : [];

  // Limit returned array size and extract the EntitlementDataRow from the list
  const result = searchResult.slice(0, 25).map((item) => item.item);

  return NextResponse.json(result);
}
