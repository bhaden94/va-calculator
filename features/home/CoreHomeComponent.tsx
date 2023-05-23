import { Box, Typography } from "@mui/material";
import { SecondTierEntitlementConstants } from "./HomeConstants";
import { CalcCard } from "./components/CalcCard/CalcCard";
import { FC } from "react";

export const CoreHomeComponent: FC = () => {
	return (
		<Box
			sx={{
				padding: "25px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography
				variant="h1"
				sx={{ fontSize: "2rem", margin: "0 0 25px" }}
			>
				VA Calculators
			</Typography>
			<Typography
				variant="h2"
				sx={{
					fontSize: "1.5rem",
					margin: "0 0 50px",
					textAlign: "center",
				}}
			>
				The Veterans Affairs (VA) calculator website is for calculating
				different veteran benefits.
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					gap: "2rem",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<CalcCard
					title={
						SecondTierEntitlementConstants.Title
					}
					description={
						SecondTierEntitlementConstants.Description
					}
					linkHref={
						SecondTierEntitlementConstants.Href
					}
				/>
			</Box>
		</Box>
	);
};
