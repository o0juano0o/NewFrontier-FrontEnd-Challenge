import React from "react";
import { Box, CircularProgress } from "@mui/material";

export default function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress size={60} />
    </Box>
  );
}
