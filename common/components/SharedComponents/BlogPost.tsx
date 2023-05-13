import { Box, CircularProgress, SxProps, Theme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import SecondTierEntitlementPost from "../../blog-posts/SecondTierEntitlementPost.mdx";

export enum BlogType {
	SecondTierEntitlement = "SecondTierEntitlement",
}

interface IBlogPostProps {
	blogType: BlogType;
}

export const BlogPost: FC<IBlogPostProps> = ({ blogType }) => {
	const [blogNode, setBlogNode] = useState<React.ReactNode>();

	const blogStyles: SxProps<Theme> = {
		padding: {
			xs: "50px 25px",
			sm: "2rem 1rem",
			md: "3rem 3rem",
			lg: "4rem 5rem",
		},
	};

	useEffect(() => {
		if (blogType === BlogType.SecondTierEntitlement) {
			setBlogNode(<SecondTierEntitlementPost />);
		}
	}, [blogType]);

	return (
		<Box sx={blogStyles}>
			{blogNode || <CircularProgress disableShrink color="secondary" />}
		</Box>
	);
};
