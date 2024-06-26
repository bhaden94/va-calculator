"use client";

import { Box, SxProps, Theme, Typography } from "@mui/material";
import { FC } from "react";

const boxStyles: SxProps<Theme> = {
  display: {
    xs: "none",
    sm: "block",
  },
  marginBottom: "50px",
};

const headerStyle: SxProps<Theme> = {
  marginBottom: "10px",
  fontSize: "1.5rem",
};

export const PageInformation: FC = () => {
  return (
    <Box sx={boxStyles}>
      <Typography variant="h1" sx={headerStyle}>
        Second Tier Entitlement Calculator
      </Typography>
      <Typography>
        Use our VA entitlement calculator if you already have a VA loan and your
        used entitlement will not be restored prior to closing on your new home.
      </Typography>
    </Box>
  );
};
