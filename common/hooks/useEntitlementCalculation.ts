import { useEntitlementDataInput } from "./EntitlementDataContext";
import { useEffect, useState } from "react";

interface EntitlementCalculations {
	entitlementUsed: string | null;
	availableEntitlement: string | null;
	downPayment: string | null;
	maxLoanNoDown: string | null;
}

function calculateEntitlementUsed(originalLoanAmount: string | null): string {
	const convertedNumber: number = Number(originalLoanAmount);
	if (!convertedNumber) "";

	const entitlementUsed = convertedNumber * 0.25;

	return entitlementUsed.toString();
}

function calculateAvailableEntitlement(
	locationEntitlement: string | null | undefined,
	entitlementUsed: string | null
): string {
	const convertedEntitlement = Number(locationEntitlement);
	const convertedEntitlementUsed = Number(entitlementUsed);
	if (!convertedEntitlement || !convertedEntitlementUsed) return "";

	const totalEntitlement = convertedEntitlement * 0.25;
	const availableEntitlement = totalEntitlement - convertedEntitlementUsed;

	if (availableEntitlement <= 0) return "0";

	return availableEntitlement.toString();
}

function calculateSecondTierCap(
	countyLimit: string | null | undefined,
	entitlementUsed: string | null
): string {
	const convertedCountyLimit = Number(countyLimit);
	const convertedEntitlementUsed = Number(entitlementUsed);
	if (!convertedCountyLimit || !convertedEntitlementUsed) return "";

	const calculatedCountyLimitEntitlement = convertedCountyLimit * 0.25;
	const secondTierCap =
		calculatedCountyLimitEntitlement - convertedEntitlementUsed;

	return (secondTierCap * 4).toString();
}

function calculateDownPayment(
	secondTierCap: string | null,
	newHomePrice: string | null
): string {
	const convertedSecondTierCap = Number(secondTierCap);
	const convertedHomeAmount = Number(newHomePrice);

	if (!convertedSecondTierCap || !convertedHomeAmount) return "";

	const downPayment = (convertedHomeAmount - convertedSecondTierCap) * 0.25;

	if (downPayment <= 0) return "0";

	return downPayment.toString();
}

function calculateMaxLoanNoDown(availableEntitlement: string | null): string {
	const convertedAvailableEntitlement = Number(availableEntitlement);
	if (!convertedAvailableEntitlement) return "";

	const maxLoan = convertedAvailableEntitlement * 4;

	if (maxLoan <= 0) return "0";

	return maxLoan.toString();
}

export function useEntitlementCalculations(): EntitlementCalculations {
	const context = useEntitlementDataInput();
	const [entitlementUsed, setEntitlementUsed] = useState<string | null>(null);
	const [availableEntitlement, setAvailableEntitlement] = useState<
		string | null
	>(null);
	const [downPayment, setDownPayment] = useState<string | null>(null);
	const [maxLoanNoDown, setMaxLoanNoDown] = useState<string | null>(null);

	useEffect(() => {
		setEntitlementUsed(
			calculateEntitlementUsed(
				context?.originalLoanAmountState?.originalLoanAmount
			)
		);
	}, [context?.originalLoanAmountState?.originalLoanAmount]);

	useEffect(() => {
		setAvailableEntitlement(
			calculateAvailableEntitlement(
				context?.chosenEntitlementDataState?.chosenEntitlementDataRow
					?.entitlement,
				entitlementUsed
			)
		);
	}, [
		context?.chosenEntitlementDataState?.chosenEntitlementDataRow
			?.entitlement,
		entitlementUsed,
	]);

	useEffect(() => {
		const secondTierCap = calculateSecondTierCap(
			context?.chosenEntitlementDataState?.chosenEntitlementDataRow
				?.entitlement,
			entitlementUsed
		);
		setDownPayment(
			calculateDownPayment(
				secondTierCap,
				context?.newHomePriceState?.newHomePrice
			)
		);
	}, [
		context?.chosenEntitlementDataState?.chosenEntitlementDataRow
			?.entitlement,
		context?.newHomePriceState?.newHomePrice,
		entitlementUsed,
	]);

	useEffect(() => {
		setMaxLoanNoDown(calculateMaxLoanNoDown(availableEntitlement));
	}, [availableEntitlement]);

	return {
		entitlementUsed,
		availableEntitlement,
		downPayment,
		maxLoanNoDown,
	};
}
