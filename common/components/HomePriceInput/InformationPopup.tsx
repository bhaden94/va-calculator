import { FC, useState } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "@mui/material";

interface IInformationPopupProps {
	title: string;
}

export const InformationPopup: FC<IInformationPopupProps> = ({ title }) => {
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
			<InfoOutlinedIcon sx={{ cursor: "pointer" }} onClick={toggleOpen} />
		</Tooltip>
	);
};
