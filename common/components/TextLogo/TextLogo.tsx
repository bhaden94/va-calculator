import { FC } from "react";

interface ITextLogoProps {
	showTextLogo: boolean;
}

export const TextLogo: FC<ITextLogoProps> = ({ showTextLogo }) => {
	return (
		<div style={{ margin: "16px 16px 5px" }}>
			<img
				src={showTextLogo ? "./logo-with-text.svg" : "./logo.svg"}
				height="50px"
				width="180px"
			/>
		</div>
	);
};
