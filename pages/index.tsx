import {
	Autocomplete,
	TextField,
	TextFieldProps,
	ThemeProvider,
	Typography,
	useTheme,
	styled,
	autocompleteClasses,
	createFilterOptions,
} from "@mui/material";
import {
	EntitlementDataRow,
	OptimizedEntitlementData,
} from "../common/types/EntitlementModel";
import Head from "next/head";
import NavBar from "../common/components/NavBar/NavBar";
import {
	getLocalEntitlementData,
	getNonOptimizedData,
} from "../common/utils/localData";
import { VariableSizeList, ListChildComponentProps } from "react-window";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../styles/Home.module.css";
import { theme } from "../common/utils/theme";
import { useEffect, useState } from "react";
import { NavBarExtension } from "../common/components/NavBarExtension/NavBarExtension";
import ListSubheader from "@mui/material/ListSubheader";
import useAppBarHeight from "../common/hooks/useAppBarHeight";
import React from "react";
import Popper from "@mui/material/Popper";

interface EntitlementDataProps {
	data: OptimizedEntitlementData;
	nonOptimizedData: EntitlementDataRow[];
}

const ZIP_CODE_REGEX = "^([0-9]{5})$";
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
				style={inlineStyle}
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
});

const filterOptions = createFilterOptions({
	stringify: ({ zipCode, county, state }: EntitlementDataRow) =>
		`${zipCode}, ${county}, ${state}`,
});

const EntitlementData = ({ data, nonOptimizedData }: EntitlementDataProps) => {
	const [zipCodeData, setZipCodeData] = useState<EntitlementDataRow>();
	const [zipCode, setZipCode] = useState<string>("");
	const appBarHeight = useAppBarHeight();

	useEffect(() => {
		setZipCodeData(data[zipCode]);
	}, [zipCode]);

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
						<TextField
							label="Zip Code"
							variant="outlined"
							fullWidth
							value={zipCode}
							onChange={(event) => setZipCode(event.target.value)}
							error={
								zipCode !== "" && !zipCode.match(ZIP_CODE_REGEX)
							}
							helperText={
								zipCode !== "" && !zipCode.match(ZIP_CODE_REGEX)
									? "Please enter a five digit zip code"
									: ""
							}
						/>
						<Autocomplete
							id="virtualize-demo"
							fullWidth
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
								<TextField {...params} label="Zip Code, County, State" />
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
	const entitlementData = getLocalEntitlementData();
	const nonOptimized = getNonOptimizedData();
	return { props: { data: entitlementData, nonOptimizedData: nonOptimized } };
}

export default EntitlementData;
