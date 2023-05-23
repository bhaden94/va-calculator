import { Box, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import NavBar from "../NavBar/NavBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme";
import useAppBarHeight from "../../hooks/useAppBarHeight";

interface IPageContainerProps {
	children: React.ReactNode;
	additionalStyles?: SxProps<Theme>;
}

export const PageContainer: FC<IPageContainerProps> = ({
	children,
	additionalStyles,
}) => {
	const appBarHeight = useAppBarHeight();

	const sharedStyles: SxProps<Theme> = {
		width: {
			xs: "100%",
			lg: "1200px",
			minHeight: `calc(100vh - ${appBarHeight}px)`,
		},
		backgroundColor: "#fff",
		...additionalStyles,
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
		</ThemeProvider>
	);
};
