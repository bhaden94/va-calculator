import {
	ListSubheader,
	Typography,
	createFilterOptions,
	useTheme,
} from "@mui/material";
import { ListChildComponentProps, VariableSizeList } from "react-window";
import { useEffect, useRef } from "react";
import { EntitlementDataRow } from "../types/EntitlementModel";

export const LISTBOX_PADDING = 8; // px

export function renderRow(props: ListChildComponentProps) {
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
		<Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
			{`${dataSet[1].zipCode}, ${dataSet[1].county}, ${dataSet[1].state}`}
		</Typography>
	);
}

export function useResetCache(data: any) {
	const ref = useRef<VariableSizeList>(null);
	useEffect(() => {
		if (ref.current != null) {
			ref.current.resetAfterIndex(0, true);
		}
	}, [data]);
	return ref;
}

export const filterOptions = createFilterOptions({
	stringify: ({ zipCode, county, state }: EntitlementDataRow) =>
		`${zipCode}, ${county}, ${state}`,
});
