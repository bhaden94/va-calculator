import { Button, Paper } from "@mui/material";
import React, { FC, useState } from "react";
import { MoreDetailsRow } from "./MoreDetailsRow";
import Typography from "@mui/material/Typography";
import { formatNumberOrReturnDefault } from "../../utils/formatNumberOrReturnDefault";
import { useEntitlementCalculations } from "../../hooks/useEntitlementCalculation";
import { useEntitlementDataInput } from "../../hooks/useEntitlementDataInput";

const UP_HEIGHT = 175;
const DOWN_HEIGHT = 575;

// TODO: clean up this component
export const NavBarExtension: FC = () => {
	const [height, setHeight] = useState<number>(UP_HEIGHT);
	const { chosenEntitlementDataState } = useEntitlementDataInput();
	const {
		entitlementUsed,
		availableEntitlement,
		downPayment,
		maxLoanNoDown,
	} = useEntitlementCalculations();

	const paperStyle: React.CSSProperties = {
		width: "100%",
		height: height,
		borderRadius: "0 0 35px 35px",
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		transition: ".4s ease",
		zIndex: 9,
	};
	const divStyle: React.CSSProperties = {
		textAlign: "center",
		width: "100%",
	};
	const collapsableContent: React.CSSProperties = {
		overflow: "hidden",
		transition: "max-height .4s ease",
	};
	const collapsableInner: React.CSSProperties = {
		height: "400px",
		padding: "85px 5%",
	};

	// the -22 comes from half the height of the Large contained button from MUI
	const seeDetailsButtonOffset = paperStyle.height
		? Number(paperStyle.height) - 22
		: 0;
	const buttonDiv: React.CSSProperties = {
		position: "absolute",
		top: `${seeDetailsButtonOffset}px`,
		textAlign: "center",
		transition: ".4s ease",
	};

	const setNavBarExtension = () => {
		if (height === UP_HEIGHT) setHeight(DOWN_HEIGHT);
		else setHeight(UP_HEIGHT);
	};

	return (
		<Paper style={paperStyle} elevation={4}>
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
							informationBubbleTitle="Show entitlement used calculation"
						/>
						<MoreDetailsRow
							title="Available entitlement"
							amount={availableEntitlement}
							informationBubbleTitle="Show available entitlement calculation"
						/>
						<MoreDetailsRow
							title="Max loan with 0% down"
							amount={maxLoanNoDown}
						/>
					</div>
				</div>
			</div>
			<div style={buttonDiv}>
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
