import React from "react";
import { Flexbox } from "../../Elements/Flexbox";
import { GridItem } from "../../Elements/GridItem";
import Grid from "@material-ui/core/Grid";
export const FirstLayout = () => {
  return (
    <Flexbox>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GridItem height="50px">xs=12</GridItem>
        </Grid>
        <Grid item xs={6}>
          <GridItem height="150px">xs=6</GridItem>
        </Grid>
        <Grid item xs={6}>
          <GridItem height="150px">xs=6</GridItem>
        </Grid>
        <Grid item xs={3}>
          <GridItem height="50px">xs=3</GridItem>
        </Grid>
        <Grid item xs={3}>
          <GridItem height="50px">xs=3</GridItem>
        </Grid>
        <Grid item xs={3}>
          <GridItem height="50px">xs=3</GridItem>
        </Grid>
        <Grid item xs={3}>
          <GridItem height="50px">xs=3</GridItem>
        </Grid>
        <Grid item xs={3}>
          <GridItem height="50px">xs=3</GridItem>
        </Grid>
        <Grid item xs={3}>
          <GridItem height="50px">xs=3</GridItem>
        </Grid>
        <Grid item xs={3}>
          <GridItem height="50px">xs=3</GridItem>
        </Grid>
        <Grid item xs={3}>
          <GridItem height="50px">xs=3</GridItem>
        </Grid>
      </Grid>
    </Flexbox>
  );
};
