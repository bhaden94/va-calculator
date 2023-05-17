import { FC, useState } from "react";
import {
	IconButton,
	SvgIconPropsSizeOverrides,
	Tooltip,
	Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { OverridableStringUnion } from "@mui/types";

interface IInformationPopupProps {
	title: string;
	iconFontSize?:
		| OverridableStringUnion<
				"inherit" | "large" | "medium" | "small" | "x-small",
				SvgIconPropsSizeOverrides
		  >
		| string;
}

export const InformationPopup: FC<IInformationPopupProps> = ({
	title,
	iconFontSize,
}) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => {
		setOpen(false);
	};

	const toggleOpen = () => {
		setOpen(!open);
	};

	return (
		<Tooltip
			title={<Typography>{title}</Typography>}
			open={open}
			onClose={handleClose}
			placement="top-start"
			leaveTouchDelay={5000}
		>
			<IconButton
				onClick={toggleOpen}
				color="inherit"
				aria-label="Information bubble"
			>
				<InfoOutlinedIcon
					sx={{ fontSize: iconFontSize }}
					fontSize={iconFontSize ? "inherit" : "medium"}
				/>
			</IconButton>
		</Tooltip>
	);
};
