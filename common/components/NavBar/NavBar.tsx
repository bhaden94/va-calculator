import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { SxProps } from "@mui/material";
import { TextLogo } from "../SharedComponents/TextLogo";
import { Theme } from "@emotion/react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const navItems = ["Second Tier Entitlement"];

const outerBoxStyle: SxProps<Theme> = {
	display: "flex",
};

const mobileIconButtonStyle: SxProps<Theme> = {
	mr: 2,
	display: { md: "none" },
	color: "#BE9E44",
};

const mobileDrawerStyle: SxProps<Theme> = {
	display: { xs: "block", md: "none" },
	"& .MuiDrawer-paper": {
		boxSizing: "border-box",
		width: {
			xs: "80%",
			sm: "50%",
		},
	},
};

const desktopIconStyle: SxProps<Theme> = {
	flexGrow: 1,
	display: { xs: "none", sm: "none", md: "block" },
};

const navItemsBoxStyle: SxProps<Theme> = {
	display: { xs: "none", sm: "none", md: "block" },
};

export default function NavBar() {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle}>
			<TextLogo showTextLogo={true} width={225} />
			<Divider variant="middle" />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={outerBoxStyle}>
			<CssBaseline />
			<AppBar component="nav" elevation={0}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={mobileIconButtonStyle}
					>
						<MenuIcon fontSize="large" />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={desktopIconStyle}
					>
						<TextLogo showTextLogo={true} height={30} width={225} />
					</Typography>
					<Box sx={navItemsBoxStyle}>
						{navItems.map((item) => (
							<Button key={item}>{item}</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={mobileDrawerStyle}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
