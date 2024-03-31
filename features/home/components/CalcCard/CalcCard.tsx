import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { FC } from "react";
import Link from "next/link";

interface ICalcCardProps {
  title: string;
  description: string;
  linkHref: string;
}

export const CalcCard: FC<ICalcCardProps> = ({
  title,
  description,
  linkHref,
}) => {
  return (
    <Card sx={{ borderRadius: "35px", padding: "8px", maxWidth: "350px" }}>
      <CardHeader title={title} />
      <CardContent sx={{ color: "#e8e8e8" }}>{description}</CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button sx={{ fontSize: "1.17rem" }}>
          <Link href={linkHref}>Use Calculator</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
