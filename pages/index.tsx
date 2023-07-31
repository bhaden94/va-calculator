import { CoreHomeComponent } from "../features/home/CoreHomeComponent";
import Head from "next/head";
import { HomePageTitleText } from "../features/home/HomeConstants";
import React from "react";

const Home = () => {
	return (
		<>
			<Head>
				<title>{HomePageTitleText}</title>
				<meta
					name="description"
					content="The Veterans Affairs (VA) calculator website. Used for calculating United States Veteran benefits."
				/>
			</Head>
			<CoreHomeComponent />
		</>
	);
};

export default Home;
