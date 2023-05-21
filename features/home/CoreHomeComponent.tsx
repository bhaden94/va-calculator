import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
} from "@mui/material";
import { FC } from "react";
import Link from "next/link";

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
			<Card
				sx={{ borderRadius: "35px", padding: "8px", maxWidth: "400px" }}
			>
				<CardHeader title="Second Tier Entitlement Calculator" />
				<CardContent sx={{ color: "#e8e8e8" }}>
					Use our VA entitlement calculator if you already have a VA
					loan and your used entitlement will not be restored prior to
					closing on your new home.
				</CardContent>
				<CardActions sx={{ justifyContent: "center" }}>
					<Button sx={{ fontSize: "1.17rem" }}>
						<Link href="/second-tier-entitlement">
							Use Calculator
						</Link>
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};
