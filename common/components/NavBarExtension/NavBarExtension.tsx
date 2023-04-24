import { Box, Button, Paper } from "@mui/material";
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
const TABLET_DESKTOP_HEIGHT = 500;

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
		<Paper
			sx={{
				...paperStyle,
				height: { xs: height, sm: TABLET_DESKTOP_HEIGHT },
				position: { xs: "absolute", sm: "relative" },
				borderRadius: { xs: "0 0 35px 35px", sm: "8px" },
			}}
			elevation={4}
		>
			<div style={divStyle}>
				<Typography>Required Down Payment</Typography>
				<Typography fontSize="3.1rem" fontWeight="bold">
					${formatNumberOrReturnDefault(downPayment)}
				</Typography>
				<Box
					sx={{
						...collapsableContent,
						maxHeight: {
							xs: height === UP_HEIGHT ? 0 : 400,
							sm: 300,
						},
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
				</Box>
			</div>
			<Box
				sx={{
					...buttonDiv,
					top: `${seeDetailsButtonOffset}px`,
					display: { sm: "none" },
				}}
			>
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
			</Box>
		</Paper>
	);
};
