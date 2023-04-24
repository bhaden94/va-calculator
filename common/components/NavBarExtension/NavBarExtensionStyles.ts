/** MoreDetailsRow */
export const row: React.CSSProperties = {
	display: "flex",
	justifyContent: "space-between",
	margin: "25px 0",
};
export const leftColumn: React.CSSProperties = {
	textAlign: "left",
	flexDirection: "column",
};
export const rightColumn: React.CSSProperties = {
	textAlign: "right",
	flexDirection: "column",
};

/** NavBarExtension */
export const paperStyle: React.CSSProperties = {
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	transition: ".4s ease",
	zIndex: 9,
};
export const divStyle: React.CSSProperties = {
	textAlign: "center",
	width: "100%",
};
export const collapsableContent: React.CSSProperties = {
	overflow: "hidden",
	transition: "max-height .4s ease",
};
export const collapsableInner: React.CSSProperties = {
	height: "400px",
	padding: "85px 5%",
};
export const buttonDiv: React.CSSProperties = {
	position: "absolute",
	textAlign: "center",
	transition: ".4s ease",
};
