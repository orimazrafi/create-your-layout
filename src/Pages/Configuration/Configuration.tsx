import React from "react";
import { PageHeadline } from "../../Elements/PageHeadline";
import { useSelector } from "react-redux";
import { GridItem } from "../../Elements/GridItem";
import Grid from "@material-ui/core/Grid";
import { LayoutInterface } from "../../interfaces";
import { FlexboxWrapper } from "../../Elements/FlexboxWrapper";
import { ComponentsFlex } from "../../Components/ComponentsFlex/ComponentsFlex";
import { ConfigurationWrapper } from "../../Elements/ConfigurationWrapper";
const log = console.log;
export const Configuration = () => {
  const { layout } = useSelector(
    (state: { layout: { layout: LayoutInterface[] } }) => state.layout
  );
  log(layout);
  return (
    <FlexboxWrapper>
      <ComponentsFlex />
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
    </FlexboxWrapper>
  );
};
