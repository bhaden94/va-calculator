import { Box, SxProps, Theme } from "@mui/material";
import { FC } from "react";

interface IBlogPostProps {
	children: React.ReactNode; // Blog posts will come from the blog-posts directory
}

export const BlogPost: FC<IBlogPostProps> = ({ children }) => {
	const blogStyles: SxProps<Theme> = {
		padding: {
			xs: "50px 25px",
			sm: "2rem 1rem",
			md: "3rem 3rem",
			lg: "4rem 5rem",
		},
	};

	return <Box sx={blogStyles}>{children}</Box>;
};
