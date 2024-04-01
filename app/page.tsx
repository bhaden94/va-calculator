import { CoreHomeComponent } from "../features/home/CoreHomeComponent";
import { HomePageTitleText } from "../features/home/HomeConstants";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: HomePageTitleText,
  description:
    "The Veterans Affairs (VA) calculator website. Used for calculating United States Veteran benefits.",
};

const Home = () => {
  return <CoreHomeComponent />;
};

export default Home;
