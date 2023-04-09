export interface EntitlementDataRow {
	zipCode: string;
	county: string;
	state: string;
	entitlement: string;
}

export interface OptimizedEntitlementData {
	[zipCode: string]: EntitlementDataRow;
}
