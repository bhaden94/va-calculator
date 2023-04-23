import { FC } from "react";
import { InputFormField } from "./InputFormFields";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";
import { HomePriceInputConstants } from "../EntitlementCalcConstants";

export const HomePriceInput: FC = () => {
	const { originalLoanAmountState, newHomePriceState } =
		useEntitlementDataInput();

	return (
		<div style={{ width: "100%" }}>
			<InputFormField
				inputLabel={HomePriceInputConstants.originalLoalAmountLabelText}
				informationBubbleTitle={
					HomePriceInputConstants.originalLoanInformationBubbleText
				}
				stateSetter={originalLoanAmountState.setOriginalLoanAmount}
			/>
			<InputFormField
				inputLabel={HomePriceInputConstants.newHomePriceLabelText}
				informationBubbleTitle={
					HomePriceInputConstants.newHomeInformationBubbleText
				}
				stateSetter={newHomePriceState.setNewHomePrice}
			/>
		</div>
	);
};
