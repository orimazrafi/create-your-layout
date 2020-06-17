import React from "react";
import { Flexbox } from "../../Elements/Flexbox";
import { GridItem } from "../../Elements/GridItem";
import { useDispatch, useSelector } from "react-redux";
import {
  reduxSetActiveLayout,
  reduxSetLayout,
} from "../../Features/Layout/LayoutSlice";
import { useHistory } from "react-router-dom";
import { LayoutInterface } from "../../interfaces";
import Grid from "@material-ui/core/Grid";

export const SecondLayout = () => {
  const { layout, layout2, activeLayout } = useSelector(
    (state: { layout: { layout: any; layout2: any; activeLayout: any } }) =>
      state.layout
  );
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Flexbox
      onClick={() => {
        if (!activeLayout) dispatch(reduxSetActiveLayout("second"));
        if (activeLayout === "second") dispatch(reduxSetLayout(layout));
        if (activeLayout === "first") {
          if (window.confirm("this will erase your first layout")) {
            dispatch(reduxSetActiveLayout("second"));
          } else return;
        }

        history.push("/configuration");
      }}
    >
      <Grid container spacing={3}>
        {activeLayout === "second"
          ? layout.length > 0 &&
            layout.map((l: LayoutInterface) => (
              <Grid item xs={l.width} key={Math.random()}>
                <GridItem height={l.height}>{l.component}</GridItem>
              </Grid>
            ))
          : layout2.length > 0 &&
            layout2.map((l: LayoutInterface) => (
              <Grid item xs={l.width} key={Math.random()}>
                <GridItem height={l.height}>{l.component}</GridItem>
              </Grid>
            ))}
      </Grid>
    </Flexbox>
  );
};
