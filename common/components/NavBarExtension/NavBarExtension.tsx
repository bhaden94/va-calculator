import { Button, Paper } from "@mui/material";
import React, { FC, useState } from "react";
import {
	buttonDiv,
	collapsableContent,
	collapsableInner,
	divStyle,
	paperStyle,
} from "./NavBarExtensionStyles";
import { MoreDetailsRow } from "./MoreDetailsRow";
import { NavBarExtensionConstants } from "../EntitlementCalcConstants";
import Typography from "@mui/material/Typography";
import { formatNumberOrReturnDefault } from "../../utils/formatNumberOrReturnDefault";
import { useEntitlementCalculations } from "../../hooks/useEntitlementCalculation";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";

const UP_HEIGHT = 175;
const DOWN_HEIGHT = 575;

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
							title={
								NavBarExtensionConstants.countyLimitTitleText
							}
							amount={
								chosenEntitlementDataState
									.chosenEntitlementDataRow?.entitlement
							}
						/>
						<MoreDetailsRow
							title={
								NavBarExtensionConstants.entitlementUsedTitleText
							}
							amount={entitlementUsed}
							informationBubbleTitle={
								NavBarExtensionConstants.entitlementUsedInformationBubbleText
							}
						/>
						<MoreDetailsRow
							title={
								NavBarExtensionConstants.availableEntitlementTitleText
							}
							amount={availableEntitlement}
							informationBubbleTitle={
								NavBarExtensionConstants.availableEntitlementInformationBubbleText
							}
						/>
						<MoreDetailsRow
							title={NavBarExtensionConstants.maxLoanTitleText}
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
					{height === UP_HEIGHT
						? NavBarExtensionConstants.seeDetailsButtonText
						: NavBarExtensionConstants.hideDetailsButtonText}
				</Button>
			</div>
		</Paper>
	);
};
