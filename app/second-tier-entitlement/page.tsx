import { readFileSync } from "fs";
import { Metadata } from "next";
import {
  SecondTierEntitlementWebpageDescription,
  SecondTierEntitlementWebpageText,
} from "../../features/second-tier-entitlement/EntitlementCalcConstants";
import { CoreEntitlementCalcComponent } from "../../features/second-tier-entitlement/CoreEntitlementCalcComponent";
import { BlogPost } from "../../common/components/SharedComponents/BlogPost";
import { MDXRemote } from "next-mdx-remote/rsc";

const SECOND_TIER_ENTITLEMENT_POST_DIR =
  "common/blog-posts/SecondTierEntitlementPost.mdx";

export const metadata: Metadata = {
  title: SecondTierEntitlementWebpageText,
  description: SecondTierEntitlementWebpageDescription,
};

const EntitlementDataPage = async () => {
  const mdxSource = readFileSync(SECOND_TIER_ENTITLEMENT_POST_DIR, "utf8");

  return (
    <>
      <CoreEntitlementCalcComponent />
      <BlogPost>
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={mdxSource} />
      </BlogPost>
    </>
  );
};

export default EntitlementDataPage;
