import { FC } from "react";
import { privacyPolicyCode } from "../../PRIVACYPOLICY";

export const CorePrivacyPolicyComponent: FC = () => {
	return <div dangerouslySetInnerHTML={{ __html: privacyPolicyCode }} />;
};
