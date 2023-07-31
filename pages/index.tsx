import { CoreHomeComponent } from "../features/home/CoreHomeComponent";
import Head from "next/head";
import { HomePageTitleText } from "../features/home/HomeConstants";
import React from "react";

const Home = () => {
	return (
		<>
			<Head>
				<title>{HomePageTitleText}</title>
			</Head>
			<CoreHomeComponent />
		</>
	);
};

export default Home;
