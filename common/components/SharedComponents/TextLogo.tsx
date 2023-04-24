import { FC } from "react";
import Image from "next/image";
import { VaCalculatorLogoAlternateText } from "../EntitlementCalcConstants";

interface ITextLogoProps {
	showTextLogo: boolean;
	width?: number;
	height?: number;
}

export const TextLogo: FC<ITextLogoProps> = ({
	showTextLogo,
	width,
	height,
}) => {
	return (
		<div style={{ margin: "16px 16px 5px" }}>
			<Image
				src={showTextLogo ? "./logo-with-text.svg" : "./logo.svg"}
				alt={VaCalculatorLogoAlternateText}
				width={width || 180}
				height={height || 50}
				priority
			/>
		</div>
	);
};
