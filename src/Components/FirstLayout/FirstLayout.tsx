import React from "react";
import { Flexbox } from "../../Elements/Flexbox";
import { GridItem } from "../../Elements/GridItem";
import { useDispatch } from "react-redux";
import { reduxSetLayout } from "../../Features/Layout/LayoutSlice";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { LayoutInterface } from "../../interfaces";

const layout = [
  { width: 12, height: "50px" },
  { width: 6, height: "150px" },
  { width: 6, height: "150px" },
  { width: 3, height: "50px" },
  { width: 3, height: "50px" },
  { width: 3, height: "50px" },
  { width: 3, height: "50px" },
  { width: 3, height: "50px" },
  { width: 3, height: "50px" },
  { width: 3, height: "50px" },
  { width: 3, height: "50px" },
];
export const FirstLayout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Flexbox
      onClick={() => {
        dispatch(reduxSetLayout(layout));
        history.push("/configuration");
      }}
    >
      <Grid container spacing={3}>
        {layout.length > 0 &&
          layout.map((l: LayoutInterface) => (
            <Grid item xs={l.width} key={Math.random()}>
              <GridItem height={l.height}>xs=12</GridItem>
            </Grid>
          ))}
      </Grid>
    </Flexbox>
  );
};
