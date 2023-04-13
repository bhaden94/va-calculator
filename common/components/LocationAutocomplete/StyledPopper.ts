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
		},
	})
);
