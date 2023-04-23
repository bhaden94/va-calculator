import { Button, Paper } from "@mui/material";
import React, { FC, useState } from "react";
import {
	paperStyle,
	divStyle,
	collapsableContent,
	collapsableInner,
	buttonDiv,
} from "./NavBarExtensionStyles";
import { MoreDetailsRow } from "./MoreDetailsRow";
import Typography from "@mui/material/Typography";
import { formatNumberOrReturnDefault } from "../../utils/formatNumberOrReturnDefault";
import { useEntitlementCalculations } from "../../hooks/useEntitlementCalculation";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";

const UP_HEIGHT = 175;
const DOWN_HEIGHT = 575;
const ENTITLEMENT_USED_POPUP_TEXT =
	"Your used entitlement is calculated by taking 25% of the original loan amount.";
const AVAILABLE_ENTITLEMENT_POPUP_TEXT =
	"Your available entitlement is calculated by subtracting your used entitlement from the total entitlement available in your county.";

// TODO: clean up this component by making a styled component.
export const NavBarExtension: FC = () => {
	const [height, setHeight] = useState<number>(UP_HEIGHT);
	const { chosenEntitlementDataState } = useEntitlementDataInput();
	const {
		entitlementUsed,
		availableEntitlement,
		downPayment,
		maxLoanNoDown,
	} = useEntitlementCalculations();

	// the -22 comes from half the height of the Large contained button from MUI
	const seeDetailsButtonOffset = height - 22;

	const setNavBarExtension = () => {
		if (height === UP_HEIGHT) setHeight(DOWN_HEIGHT);
		else setHeight(UP_HEIGHT);
	};

	return (
		<Paper style={{ ...paperStyle, height: height }} elevation={4}>
			<div style={divStyle}>
				<Typography>Required Down Payment</Typography>
				<Typography fontSize="3.1rem" fontWeight="bold">
					${formatNumberOrReturnDefault(downPayment)}
				</Typography>
				<div
					style={{
						...collapsableContent,
						maxHeight: height === UP_HEIGHT ? 0 : 400,
					}}
				>
					<div style={collapsableInner}>
						<MoreDetailsRow
							title="County limit"
							amount={
								chosenEntitlementDataState
									.chosenEntitlementDataRow?.entitlement
							}
						/>
						<MoreDetailsRow
							title="Entitlement used"
							amount={entitlementUsed}
							informationBubbleTitle={ENTITLEMENT_USED_POPUP_TEXT}
						/>
						<MoreDetailsRow
							title="Available entitlement"
							amount={availableEntitlement}
							informationBubbleTitle={
								AVAILABLE_ENTITLEMENT_POPUP_TEXT
							}
						/>
						<MoreDetailsRow
							title="Max loan with 0% down"
							amount={maxLoanNoDown}
						/>
					</div>
				</div>
			</div>
			<div style={{ ...buttonDiv, top: `${seeDetailsButtonOffset}px` }}>
				<Button
					variant="contained"
					color="primary"
					size="large"
					onClick={() => setNavBarExtension()}
				>
					{height === UP_HEIGHT ? "SEE DETAILS" : "HIDE DETAILS"}
				</Button>
			</div>
		</Paper>
	);
};
