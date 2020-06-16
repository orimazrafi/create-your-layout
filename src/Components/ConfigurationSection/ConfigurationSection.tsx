import React from "react";
import { useSelector } from "react-redux";
import { PageHeadline } from "../../Elements/PageHeadline";
import { GridItem } from "../../Elements/GridItem";
import Grid from "@material-ui/core/Grid";
import { ConfigurationWrapper } from "../../Elements/ConfigurationWrapper";
import { useHistory } from "react-router-dom";
import { LayoutInterface } from "../../interfaces";
export const ConfigurationSection = () => {
  const history = useHistory();
  const { layout } = useSelector(
    (state: { layout: { layout: LayoutInterface[] } }) => state.layout
  );
  if (layout?.length < 1) history.push("/");
  return (
    <>
      <ConfigurationWrapper>
        <PageHeadline>Configuration</PageHeadline>
        <Grid container spacing={3}>
          {layout.length > 0 &&
            layout.map((l: LayoutInterface) => (
              <Grid item xs={l.width} key={Math.random()}>
                <GridItem height={l.height}>xs=12</GridItem>
              </Grid>
            ))}
        </Grid>
      </ConfigurationWrapper>
    </>
  );
};
