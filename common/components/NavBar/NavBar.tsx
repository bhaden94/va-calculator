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
import { TextLogo } from "../SharedComponents/TextLogo";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const navItems = ["Second Tier Entitlement"];

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
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar component="nav" elevation={0}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { md: "none" } }}
					>
						<MenuIcon fontSize="large" sx={{ color: "#BE9E44" }} />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "none", md: "block" },
						}}
					>
						<TextLogo showTextLogo={true} />
					</Typography>
					<Box
						sx={{
							display: { xs: "none", sm: "none", md: "block" },
						}}
					>
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
					sx={{
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: {
								xs: "80%",
								sm: "50%",
							},
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
