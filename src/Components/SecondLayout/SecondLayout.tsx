import React from "react";
import { useSelector } from "react-redux";

import { Layout } from "../Layout/Layout";
import { useGrid } from "../../Hooks/useGrid";
import { FIRST, SECOND } from "../../helpers";
import { LayoutInterface } from "../../interfaces";

export const SecondLayout = () => {
  const { secondLayout } = useSelector(
    (state: { layout: { secondLayout: LayoutInterface[] } }) => state.layout
  );
  const { handleGrid } = useGrid(SECOND, FIRST);
  return (
    <Layout
      handleGrid={handleGrid}
      gridLayout={secondLayout}
      layoutNumber={SECOND}
    />
  );
};
