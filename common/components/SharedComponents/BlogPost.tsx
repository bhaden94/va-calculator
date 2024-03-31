import { Box, styled } from "@mui/material";
import { FC } from "react";

interface IBlogPostProps {
  children: React.ReactNode; // Blog posts will come from the blog-posts directory
}

const StyledBlogPost = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    padding: {
      xs: "50px 25px",
      sm: "2rem 1rem",
      md: "3rem 3rem",
      lg: "4rem 5rem",
    },
    "& h2": {
      fontSize: "2rem",
    },
    "& h3": {
      fontSize: "1.5rem",
    },
    "& h4": {
      fontSize: "1.17rem",
    },
  }),
);

export const BlogPost: FC<IBlogPostProps> = ({ children }) => {
  return <StyledBlogPost>{children}</StyledBlogPost>;
};
