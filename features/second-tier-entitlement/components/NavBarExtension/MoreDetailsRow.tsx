import { Box, Typography } from "@mui/material";
import { leftColumn, rightColumn, row } from "./NavBarExtensionStyles";
import { FC } from "react";
import { InformationPopup } from "../../../../common/components/SharedComponents/InformationPopup";
import { formatNumberOrReturnDefault } from "../../utils/formatNumberOrReturnDefault";

interface IMoreDetailsRowProps {
  title: string;
  amount: string | undefined | null;
  informationBubbleTitle?: string;
}

export const MoreDetailsRow: FC<IMoreDetailsRowProps> = ({
  title,
  amount,
  informationBubbleTitle,
}) => {
  return (
    <Box style={row}>
      <Box style={leftColumn}>
        <Typography>
          {title}&nbsp;
          {informationBubbleTitle && (
            <InformationPopup
              title={informationBubbleTitle}
              iconFontSize="16px"
            />
          )}
        </Typography>
      </Box>
      <Box style={rightColumn}>
        <Typography>${formatNumberOrReturnDefault(amount)}</Typography>
      </Box>
    </Box>
  );
};
