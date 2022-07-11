import { Box, Card, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Card
        sx={{
          width: "95vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: theme.gradient,
          color: "#ffffff",
        }}
      >
        <Typography sx={{ fontSize: "45px" }}>
          Welcome to New Frontiers
          <br />
          Explore the <b>unknown</b> with us!
        </Typography>
      </Card>
    </Box>
  );
}
