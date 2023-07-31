import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { BlogPost } from "../../common/components/SharedComponents/BlogPost";
import { CoreEntitlementCalcComponent } from "../../features/second-tier-entitlement/CoreEntitlementCalcComponent";
import { EntitlementDataRow } from "../../features/second-tier-entitlement/types/EntitlementModel";
import { GetStaticProps } from "next";
import Head from "next/head";
import { PageContainer } from "../../common/components/SharedComponents/PageContainer";
import React from "react";
import { SecondTierEntitlementWebpageText } from "../../features/second-tier-entitlement/EntitlementCalcConstants";
import { getNonOptimizedData } from "../../features/second-tier-entitlement/utils/localData";
import { readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";

interface EntitlementDataProps {
	nonOptimizedData: EntitlementDataRow[];
	mdxSource: MDXRemoteSerializeResult;
}

const SECOND_TIER_ENTITLEMENT_POST_DIR =
	"common/blog-posts/SecondTierEntitlementPost.mdx";

const EntitlementData = ({
	nonOptimizedData,
	mdxSource,
}: EntitlementDataProps) => {
	return (
		<>
			<Head>
				<title>{SecondTierEntitlementWebpageText}</title>
			</Head>
			<PageContainer>
				<CoreEntitlementCalcComponent
					entitlementData={nonOptimizedData}
				/>
				<BlogPost>
					<MDXRemote {...mdxSource} />
				</BlogPost>
			</PageContainer>
		</>
	);
};

export const getStaticProps: GetStaticProps<{
	nonOptimizedData: EntitlementDataRow[];
	mdxSource: MDXRemoteSerializeResult;
}> = async () => {
	const nonOptimized = getNonOptimizedData();
	const mdxSource = await serialize(
		readFileSync(SECOND_TIER_ENTITLEMENT_POST_DIR, "utf8")
	);
	return { props: { nonOptimizedData: nonOptimized, mdxSource: mdxSource } };
};

export default EntitlementData;
