import { FC } from "react";
import { InputFormField } from "./InputFormFields";
import { InputLabel } from "../../types/InputLabel";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";

const ORIGINAL_LOAN_TEXT =
	"The total amount of money borrowed to purchase your current home.";
const NEW_HOME_TEXT = "The price of your new home.";

export const HomePriceInput: FC = () => {
	const { originalLoanAmountState, newHomePriceState } =
		useEntitlementDataInput();

	return (
		<div style={{ width: "100%" }}>
			<InputFormField
				inputLabel={InputLabel.OriginalLoanAmount}
				informationBubbleTitle={ORIGINAL_LOAN_TEXT}
				stateSetter={originalLoanAmountState.setOriginalLoanAmount}
			/>
			<InputFormField
				inputLabel={InputLabel.NewHomePrice}
				informationBubbleTitle={NEW_HOME_TEXT}
				stateSetter={newHomePriceState.setNewHomePrice}
			/>
		</div>
	);
};
