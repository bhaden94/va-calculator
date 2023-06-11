import { CoreHomeComponent } from "../features/home/CoreHomeComponent";
import Head from "next/head";
import { HomePageTitleText } from "../features/home/HomeConstants";
import { PageContainer } from "../common/components/SharedComponents/PageContainer";
import React from "react";

const Home = () => {
	return (
		<>
			<Head>
				<title>{HomePageTitleText}</title>
			</Head>
			<PageContainer>
				<CoreHomeComponent />
			</PageContainer>
		</>
	);
};

export default Home;
