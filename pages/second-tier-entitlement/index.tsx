import { BlogPost } from "../../common/components/SharedComponents/BlogPost";
import { CoreEntitlementCalcComponent } from "../../features/second-tier-entitlement/CoreEntitlementCalcComponent";
import { EntitlementDataRow } from "../../features/second-tier-entitlement/types/EntitlementModel";
import Head from "next/head";
import { PageContainer } from "../../common/components/SharedComponents/PageContainer";
import React from "react";
import SecondTierEntitlementPost from "../../common/blog-posts/SecondTierEntitlementPost.mdx";
import { SecondTierEntitlementWebpageText } from "../../features/second-tier-entitlement/EntitlementCalcConstants";
import { getNonOptimizedData } from "../../features/second-tier-entitlement/utils/localData";

interface EntitlementDataProps {
	nonOptimizedData: EntitlementDataRow[];
}

const EntitlementData = ({ nonOptimizedData }: EntitlementDataProps) => {
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
					<SecondTierEntitlementPost />
				</BlogPost>
			</PageContainer>
		</>
	);
};

export async function getStaticProps() {
	const nonOptimized = getNonOptimizedData();
	return { props: { nonOptimizedData: nonOptimized } };
}

export default EntitlementData;
