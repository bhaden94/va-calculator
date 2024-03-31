import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { VaCalculatorLogoAlternateText } from "../../../features/second-tier-entitlement/EntitlementCalcConstants";

interface ICompanyLogoProps {
  showTextLogo: boolean;
  width?: number;
  height?: number;
}

export const CompanyLogo: FC<ICompanyLogoProps> = ({
  showTextLogo,
  width,
  height,
}) => {
  return (
    <div style={{ margin: "16px 16px 5px" }}>
      <Link href="/">
        <Image
          src={showTextLogo ? "./logo-with-text.svg" : "./logo.svg"}
          alt={VaCalculatorLogoAlternateText}
          width={width || 180}
          height={height || 50}
          priority
        />
      </Link>
    </div>
  );
};
