"use client";

import { Box, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import { Footer } from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import useAppBarHeight from "../hooks/useAppBarHeight";

interface ILayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
	const appBarHeight = useAppBarHeight();
	const footerHeight = 150;

	const sharedStyles: SxProps<Theme> = {
		width: {
			xs: "100%",
			lg: "1200px",
			minHeight: `calc(100vh - ${appBarHeight}px - ${footerHeight}px)`,
		},
		backgroundColor: "#fff",
	};

	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<main
				style={{
					paddingTop: appBarHeight,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box sx={sharedStyles}>{children}</Box>
			</main>
			<Footer footerHeight={footerHeight} />
		</ThemeProvider>
	);
};
