import React from "react";
import { useSelector } from "react-redux";

import { Flexbox } from "../../Elements/Flexbox";
import { GridItem } from "../../Elements/GridItem";
import { LayoutInterface } from "../../interfaces";
import Grid from "@material-ui/core/Grid";
interface Props {
  handleGrid: () => void;
  gridLayout: LayoutInterface[];
  layoutNumber: string;
}
export const Layout = (props: Props) => {
  const { layout, activeLayout } = useSelector(
    (state: { layout: { layout: LayoutInterface[]; activeLayout: string } }) =>
      state.layout
  );
  const { handleGrid, gridLayout, layoutNumber } = props;
  const layoutToRender = activeLayout === layoutNumber ? layout : gridLayout;
  return (
    <Flexbox onClick={handleGrid}>
      <Grid container spacing={3}>
        {layoutToRender.length > 0 &&
          layoutToRender.map((layout: LayoutInterface) => (
            <Grid item xs={layout.width} key={Math.random()}>
              <GridItem
                height={layout.height}
                color={layout.component}
              ></GridItem>
            </Grid>
          ))}
      </Grid>
    </Flexbox>
  );
};
