import { Button, Paper } from "@mui/material";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import useAppBarHeight from "../../hooks/useAppBarHeight";

interface INavBarExtensionProps {}

export const NavBarExtension: FC<INavBarExtensionProps> = (props) => {
	const appBarHeight = useAppBarHeight();
	const paperStyle: React.CSSProperties = {
		width: "100%",
		height: 175,
		borderRadius: "0 0 35px 35px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	};
	const divStyle: React.CSSProperties = {
		textAlign: "center",
	};

    // the -22 comes from half the height of the Large contained button from MUI
	const seeDetailsButtonOffset = paperStyle.height
		? appBarHeight + Number(paperStyle.height) - 22
		: 0;
	const buttonDiv: React.CSSProperties = {
		position: "absolute",
		top: `${seeDetailsButtonOffset}px`,
		textAlign: "center",
	};

	return (
		<Paper style={paperStyle} elevation={4}>
			<div style={divStyle}>
				<Typography>Required Down Payment</Typography>
				<Typography fontSize="3.1rem" fontWeight="bold">
					$35,000
				</Typography>
			</div>
			<div style={buttonDiv}>
				<Button variant="contained" color="primary" size="large">
					SEE DETAILS
				</Button>
			</div>
		</Paper>
	);
};
