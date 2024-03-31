"use client";

import { FC } from "react";
import { privacyPolicyCode } from "../../PRIVACYPOLICY";
import { Box, SxProps, Theme } from "@mui/material";

export const CorePrivacyPolicyComponent: FC = () => {
  const privacyPolicyStyles: SxProps<Theme> = {
    padding: {
      xs: "1rem",
      sm: "2rem",
      md: "3rem",
      lg: "4rem",
    },
  };
  return (
    <Box sx={privacyPolicyStyles}>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicyCode }} />
    </Box>
  );
};
