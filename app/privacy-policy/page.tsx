import {
  PrivacyPolicyPageDescription,
  PrivacyPolicyPageTitleText,
} from "../../features/privacy-policy/PrivacyPolicyConstants";
import { CorePrivacyPolicyComponent } from "../../features/privacy-policy/CorePrivacyPolicyComponent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: PrivacyPolicyPageTitleText,
  description: PrivacyPolicyPageDescription,
};

const PrivacyPolicy = () => {
  return <CorePrivacyPolicyComponent />;
};

export default PrivacyPolicy;
