import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { formatNumberOrReturnDefault } from "../../utils/formatNumberOrReturnDefault";
import { InformationPopup } from "../SharedComponents/InformationPopup";

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
	const row: React.CSSProperties = {
		display: "flex",
		justifyContent: "space-between",
		margin: "25px 0",
	};
	const leftColumn: React.CSSProperties = {
		textAlign: "left",
		flexDirection: "column",
	};
	const rightColumn: React.CSSProperties = {
		textAlign: "right",
		flexDirection: "column",
	};

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
				<Typography>{formatNumberOrReturnDefault(amount)}</Typography>
			</Box>
		</Box>
	);
};
