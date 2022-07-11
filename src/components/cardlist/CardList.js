import { Grid, Box, CircularProgress } from "@mui/material";
import React from "react";
import CardComponent from "../card/CardComponent";
import Spinner from "../spinner/Spinner";

export default function CardList({ list }) {
  return (
    <>
      {list.length !== 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container>
            <Grid container item spacing={4} sx={{ py: 4, px: 3 }}>
              {list.map((element, i) => {
                return (
                  <Grid item key={i}>
                    <CardComponent data={element} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Spinner />
      )}
    </>
  );
}
