import { ListSubheader, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { LISTBOX_PADDING } from "../../utils/locationAutocompleteUtils";
import { ListChildComponentProps } from "react-window";

export const ListRowComponent: FC<ListChildComponentProps> = (props) => {
	const theme = useTheme();
	const { data, index, style } = props;
	const dataSet = data[index];
	const inlineStyle = {
		...style,
		top: (style.top as number) + LISTBOX_PADDING,
	};

	if (dataSet.hasOwnProperty("group")) {
		return (
			<ListSubheader
				key={dataSet.key}
				component="div"
				style={{
					...inlineStyle,
					color: theme.palette.secondary.main,
					fontWeight: "bold",
				}}
			>
				{dataSet.group}
			</ListSubheader>
		);
	}

	return (
		<Typography
			component="li"
			{...dataSet[0]}
			noWrap
			style={{
				...inlineStyle,
				whiteSpace: "unset",
				wordBreak: "normal",
				overflowWrap: "anywhere",
			}}
		>
			{`${dataSet[1].zipCode}, ${dataSet[1].county}, ${dataSet[1].state}`}
		</Typography>
	);
};
