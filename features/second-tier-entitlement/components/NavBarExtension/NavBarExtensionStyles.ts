"use client";

import { SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

/** MoreDetailsRow */
export const row: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  margin: "25px 0",
};
export const leftColumn: React.CSSProperties = {
  textAlign: "left",
  flexDirection: "column",
};
export const rightColumn: React.CSSProperties = {
  textAlign: "right",
  flexDirection: "column",
};

/** NavBarExtension */
export const paperStyle: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: ".4s ease",
  zIndex: 9,
  position: { xs: "absolute", sm: "relative" },
  borderRadius: { xs: "0 0 35px 35px", sm: "8px" },
};
export const divStyle: React.CSSProperties = {
  textAlign: "center",
  width: "100%",
};
export const collapsableContent: React.CSSProperties = {
  overflow: "hidden",
  transition: "max-height .4s ease",
};
export const collapsableInner: React.CSSProperties = {
  height: "325px",
  padding: "35px 5%",
};
export const buttonDiv: SxProps<Theme> = {
  position: "absolute",
  textAlign: "center",
  transition: ".4s ease",
  display: { sm: "none" },
};
