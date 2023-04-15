import { FC } from "react";
import { InputFormField } from "./InputFormFields";
import { InputLabel } from "../../types/InputLabel";
import { useEntitlementDataInput } from "../../hooks/EntitlementDataContext";

export const HomePriceInput: FC = () => {
	const { originalLoanAmountState, newHomePriceState } =
		useEntitlementDataInput();

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