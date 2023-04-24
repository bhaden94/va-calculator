import { Popper, autocompleteClasses, styled } from "@mui/material";

export const StyledPopper = styled(Popper)(({ theme }) =>
	theme.unstable_sx({
		[`& .${autocompleteClasses.listbox}`]: {
			boxSizing: "border-box",
			"& ul": {
				padding: 0,
				margin: 0,
			},
		},
		[`& .${autocompleteClasses.paper}`]: {
			background: theme.palette.primary.main,
			color: theme.palette.secondary.main,
			borderLeft: "1px solid #1a1a1a",
			borderRight: "1px solid #1a1a1a",
			borderBottom: "1px solid #1a1a1a",
			borderRadius: "0 0 8px 8px"
		},
	})
);
