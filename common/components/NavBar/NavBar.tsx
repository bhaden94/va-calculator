import { Theme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SxProps,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";

import {
  PrivacyPolicyConstants,
  SecondTierEntitlementConstants,
} from "../../../features/home/HomeConstants";
import { CompanyLogo } from "../SharedComponents/CompanyLogo";

const navItems = [
  {
    title: SecondTierEntitlementConstants.title,
    href: SecondTierEntitlementConstants.href,
  },
  {
    title: PrivacyPolicyConstants.title,
    href: PrivacyPolicyConstants.href,
  },
];

const outerBoxStyle: SxProps<Theme> = {
  display: "flex",
};

const mobileIconButtonStyle: SxProps<Theme> = {
  mr: 2,
  display: { md: "none" },
  color: "#BE9E44",
};

const mobileLogoStyle: SxProps<Theme> = {
  mr: 2,
  display: { md: "none" },
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
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
      <CompanyLogo showTextLogo={true} width={225} />
      <Divider variant="middle" />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <Link href={item.href}>
                <ListItemText primary={item.title} />
              </Link>
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
          <Typography variant="h6" component="div" sx={mobileLogoStyle}>
            <CompanyLogo showTextLogo={false} height={35} />
          </Typography>
          <Typography variant="h6" component="div" sx={desktopIconStyle}>
            <CompanyLogo showTextLogo={true} height={30} width={225} />
          </Typography>
          <Box sx={navItemsBoxStyle}>
            {navItems.map((item) => (
              <Button key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </Button>
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
