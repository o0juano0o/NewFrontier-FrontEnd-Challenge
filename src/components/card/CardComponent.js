import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export default function CardComponent({ data }) {
  return (
    <Card
      sx={{ maxWidth: 345, height: 500, cursor: "pointer" }}
      onClick={() => {
        window.open(data.url, "_blank");
      }}
    >
      <CardHeader
        sx={{
          height: 100,
          "& div > span: first-child": {
            height: 62,
            whiteSpace: "normal",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            overflow: "hidden",
          },
          "& div > span:last-child": {
            textAlign: "right",
            pt: 2,
          },
        }}
        title={data.title}
        subheader={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{data.newsSite}</Typography>
            <Typography>{data.publishedAt.split("T")[0]}</Typography>
          </Box>
        }
      />
      <CardMedia
        component="img"
        height="194"
        src={data.imageUrl}
        alt="Paella dish"
      />
      <CardContent
        sx={{
          whiteSpace: "normal",
          WebkitLineClamp: 7,
          WebkitBoxOrient: "vertical",
          display: "-webkit-box",
          overflow: "hidden",
          maxHeight: 115,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {data.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}
