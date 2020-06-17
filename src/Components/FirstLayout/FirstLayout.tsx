import React from "react";
import { Flexbox } from "../../Elements/Flexbox";
import { GridItem } from "../../Elements/GridItem";
import { useDispatch, useSelector } from "react-redux";
import {
  reduxSetActiveLayout,
  reduxSetLayout,
} from "../../Features/Layout/LayoutSlice";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { LayoutInterface } from "../../interfaces";

export const FirstLayout = () => {
  const { layout, layout1, activeLayout } = useSelector(
    (state: { layout: { layout: any; layout1: any; activeLayout: any } }) =>
      state.layout
  );
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Flexbox
      onClick={() => {
        if (!activeLayout) dispatch(reduxSetActiveLayout("first"));
        if (activeLayout === "first") dispatch(reduxSetLayout(layout));
        if (activeLayout === "second") {
          if (window.confirm("this will erase your first layout")) {
            dispatch(reduxSetActiveLayout("first"));
          } else return;
        }
        history.push("/configuration");
      }}
    >
      <Grid container spacing={3}>
        {activeLayout === "first"
          ? layout.length > 0 &&
            layout.map((l: LayoutInterface) => (
              <Grid item xs={l.width} key={Math.random()}>
                <GridItem height={l.height}>{l.component}</GridItem>
              </Grid>
            ))
          : layout1.length > 0 &&
            layout1.map((l: LayoutInterface) => (
              <Grid item xs={l.width} key={Math.random()}>
                <GridItem height={l.height}>{l.component}</GridItem>
              </Grid>
            ))}
      </Grid>
    </Flexbox>
  );
};
