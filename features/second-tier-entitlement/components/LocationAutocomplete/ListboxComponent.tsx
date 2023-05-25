import {
	LISTBOX_PADDING,
	useResetCache,
} from "../../utils/locationAutocompleteUtils";
import { createContext, forwardRef, useContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { ListRowComponent } from "./ListRowComponent";
import { VariableSizeList } from "react-window";

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
	const outerProps = useContext(OuterElementContext);
	return <div ref={ref} {...props} {...outerProps} />;
});
OuterElementType.displayName = "OuterElementType";

export const ListboxComponent = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
	const { children, ...other } = props;
	const itemData: React.ReactElement[] = [];
	(children as React.ReactElement[]).forEach(
		(item: React.ReactElement & { children?: React.ReactElement[] }) => {
			itemData.push(item);
			itemData.push(...(item.children || []));
		}
	);

	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.up("sm"), {
		noSsr: true,
	});
	const itemCount = itemData.length;
	const itemSize = smUp ? 36 : 48;

	const getChildSize = (child: React.ReactElement) => {
		if (child.hasOwnProperty("group")) {
			return 48;
		}

		return itemSize;
	};

	const getHeight = () => {
		if (itemCount > 8) {
			return 8 * itemSize;
		}
		return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
	};

	const gridRef = useResetCache(itemCount);

	return (
		<div ref={ref}>
			<OuterElementContext.Provider value={other}>
				<VariableSizeList
					itemData={itemData}
					height={getHeight() + 2 * LISTBOX_PADDING}
					width="100%"
					ref={gridRef}
					outerElementType={OuterElementType}
					innerElementType="ul"
					itemSize={(index) => getChildSize(itemData[index])}
					overscanCount={5}
					itemCount={itemCount}
				>
					{ListRowComponent}
				</VariableSizeList>
			</OuterElementContext.Provider>
		</div>
	);
});
