import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const PageInformation: FC = () => {
	return (
		<Box
			sx={{
				display: {
					xs: "none",
					sm: "block",
				},
				marginBottom: "50px",
			}}
		>
			<Typography variant="h5" sx={{marginBottom: "10px"}}>
				Second Tier Entitlement Calculator
			</Typography>
			<Typography>
				Use our VA entitlement calculator if you already have a VA loan
				and your used entitlement will not be restored prior to closing
				on your new home.
			</Typography>
		</Box>
	);
};
