import { Box, Button, Paper, Theme } from "@mui/material";
import React, { FC, useState } from "react";
import Typography from "@mui/material/Typography";

interface INavBarExtensionProps {}

const UP_HEIGHT = 175;
const DOWN_HEIGHT = 575;

export const NavBarExtension: FC<INavBarExtensionProps> = (props) => {
	const [height, setHeight] = useState<number>(UP_HEIGHT);
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
		padding: "25% 25px",
	};
	const row: React.CSSProperties = {
		display: "flex",
		justifyContent: "space-between",
        margin: "25px 0"
	};
	const leftColumn: React.CSSProperties = {
		textAlign: "left",
		flexDirection: "column",
	};
	const rightColumn: React.CSSProperties = {
		textAlign: "right",
		flexDirection: "column",
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
					$35,000
				</Typography>
				<div
					style={{
						...collapsableContent,
						maxHeight: height === UP_HEIGHT ? 0 : 400,
					}}
				>
					<div style={collapsableInner}>
						<Box style={row}>
							<Box style={leftColumn}>
								<Typography>County limit</Typography>
							</Box>
							<Box style={rightColumn}>
								<Typography>234523</Typography>
							</Box>
						</Box>
						<Box style={row}>
							<Box style={leftColumn}>
								<Typography>Entitlement used</Typography>
							</Box>
							<Box style={rightColumn}>
								<Typography>23452345</Typography>
							</Box>
						</Box>
						<Box style={row}>
							<Box style={leftColumn}>
								<Typography>Available entitlement</Typography>
							</Box>
							<Box style={rightColumn}>
								<Typography>23452345</Typography>
							</Box>
						</Box>
						<Box style={row}>
							<Box style={leftColumn}>
								<Typography>Max loan with 0% down</Typography>
							</Box>
							<Box style={rightColumn}>
								<Typography>23452345</Typography>
							</Box>
						</Box>
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
