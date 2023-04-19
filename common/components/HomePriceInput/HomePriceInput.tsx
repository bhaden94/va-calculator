import { FC } from "react";
import { InputFormField } from "./InputFormFields";
import { InputLabel } from "../../types/InputLabel";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";

export const HomePriceInput: FC = () => {
	const { originalLoanAmountState, newHomePriceState } =
		useEntitlementDataInput();

	// TODO: Add information bubble on text field to explain the inputs
	return (
		<div style={{ width: "100%" }}>
			<InputFormField
				inputLabel={InputLabel.OriginalLoanAmount}
				stateSetter={originalLoanAmountState.setOriginalLoanAmount}
			/>
			<InputFormField
				inputLabel={InputLabel.NewHomePrice}
				stateSetter={newHomePriceState.setNewHomePrice}
			/>
		</div>
	);
};
