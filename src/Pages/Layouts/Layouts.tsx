import React from "react";
import { LayoutsWrapper } from "../../Elements/LayoutsWrapper";
import { PageHeadline } from "../../Elements/PageHeadline";
import Box from "@material-ui/core/Box";
import { GridLayoutWrapper } from "../../Elements/GridLayoutWrapper";
import { GridBoxWrapper } from "../../Elements/GridBoxWrapper";

export const Layouts = () => {
  return (
    <LayoutsWrapper>
      <PageHeadline>Layouts Screen</PageHeadline>
      <hr />
      <GridLayoutWrapper>
        <GridBoxWrapper>
          <Box
            p={1}
            bgcolor="grey.300"
            style={{ flex: 1, margin: "10px", minWidth: 300 }}
          >
            Layout 1
          </Box>
          <Box
            p={1}
            bgcolor="grey.300"
            style={{ flex: 1, margin: "10px", minWidth: 300 }}
          >
            Layout 2
          </Box>
        </GridBoxWrapper>
      </GridLayoutWrapper>
    </LayoutsWrapper>
  );
};
