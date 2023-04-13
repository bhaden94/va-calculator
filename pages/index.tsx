import {
	Autocomplete,
	ListSubheader,
	Popper,
	TextField,
	ThemeProvider,
	Typography,
	autocompleteClasses,
	createFilterOptions,
	styled,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { ListChildComponentProps, VariableSizeList } from "react-window";
import { EntitlementDataRow } from "../common/types/EntitlementModel";
import Head from "next/head";
import NavBar from "../common/components/NavBar/NavBar";
import { NavBarExtension } from "../common/components/NavBarExtension/NavBarExtension";
import React from "react";
import { getNonOptimizedData } from "../common/utils/localData";
import styles from "../styles/Home.module.css";
import { theme } from "../common/utils/theme";
import useAppBarHeight from "../common/hooks/useAppBarHeight";
import { useState } from "react";

interface EntitlementDataProps {
	nonOptimizedData: EntitlementDataRow[];
}

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
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

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
	const outerProps = React.useContext(OuterElementContext);
	return <div ref={ref} {...props} {...outerProps} />;
});
OuterElementType.displayName = "OuterElementType";

function useResetCache(data: any) {
	const ref = React.useRef<VariableSizeList>(null);
	React.useEffect(() => {
		if (ref.current != null) {
			ref.current.resetAfterIndex(0, true);
		}
	}, [data]);
	return ref;
}

const ListboxComponent = React.forwardRef<
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
					{renderRow}
				</VariableSizeList>
			</OuterElementContext.Provider>
		</div>
	);
});

const StyledPopper = styled(Popper)({
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
});

const filterOptions = createFilterOptions({
	stringify: ({ zipCode, county, state }: EntitlementDataRow) =>
		`${zipCode}, ${county}, ${state}`,
});

const EntitlementData = ({ nonOptimizedData }: EntitlementDataProps) => {
	const [zipCodeData, setZipCodeData] = useState<EntitlementDataRow | null>();
	const appBarHeight = useAppBarHeight();

	return (
		<>
			<Head>
				<title>VA Calculator - Second Tier Entitlement</title>
			</Head>
			<ThemeProvider theme={theme}>
				<NavBar />
				<main style={{ marginTop: appBarHeight }}>
					<NavBarExtension />
					<div className={styles.main}>
						<Autocomplete
							id="virtualize-demo"
							fullWidth
							onChange={(
								e: any,
								newValue: EntitlementDataRow | null
							) => {
								setZipCodeData(newValue);
							}}
							disableListWrap
							PopperComponent={StyledPopper}
							ListboxComponent={ListboxComponent}
							options={nonOptimizedData}
							groupBy={(option) => option.state}
							filterOptions={filterOptions}
							getOptionLabel={(option) =>
								`${option.zipCode}, ${option.county}, ${option.state}`
							}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Zip Code, County, State"
								/>
							)}
							renderOption={(props, option, state) =>
								[props, option, state.index] as React.ReactNode
							}
							renderGroup={(params) =>
								params as unknown as React.ReactNode
							}
						/>
						<p style={{ color: "#000" }}>{zipCodeData?.zipCode}</p>
						<p style={{ color: "#000" }}>{zipCodeData?.state}</p>
						<p style={{ color: "#000" }}>{zipCodeData?.county}</p>
						<p style={{ color: "#000" }}>
							{zipCodeData?.entitlement}
						</p>
					</div>
				</main>
			</ThemeProvider>
		</>
	);
};

export async function getStaticProps() {
	//const entitlementData = getLocalEntitlementData();
	const nonOptimized = getNonOptimizedData();
	return { props: { nonOptimizedData: nonOptimized } };
}

export default EntitlementData;
