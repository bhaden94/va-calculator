import { FC, useState } from "react";
import { SvgIconPropsSizeOverrides, Tooltip } from "@mui/material";
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
			title={title}
			open={open}
			onClose={handleClose}
			placement="top-start"
			leaveTouchDelay={5000}
		>
			<InfoOutlinedIcon
				sx={{ cursor: "pointer", fontSize: iconFontSize }}
				onClick={toggleOpen}
				fontSize={iconFontSize ? "inherit" : "medium"}
			/>
		</Tooltip>
	);
};
