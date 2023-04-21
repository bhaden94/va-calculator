export const formatNumberOrReturnDefault = (
	number: string | undefined | null
): string => {
	const convertedNumber = Number(number);
	if (!number) return "-";
	if (!convertedNumber) return "0";
	return Math.round(convertedNumber).toLocaleString();
};
