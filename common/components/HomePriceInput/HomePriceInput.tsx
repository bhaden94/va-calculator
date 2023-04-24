import { FC } from "react";
import { HomePriceInputConstants } from "../EntitlementCalcConstants";
import { InputFormField } from "./InputFormFields";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";

export const HomePriceInput: FC = () => {
	const { originalLoanAmountState, newHomePriceState } =
		useEntitlementDataInput();

	return (
		<div style={{ width: "100%" }}>
			<InputFormField
				inputLabel={HomePriceInputConstants.originalLoanAmountLabelText}
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
