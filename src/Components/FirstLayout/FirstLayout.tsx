import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../Layout/Layout";
import { useGrid } from "../../Hooks/useGrid";
import { FIRST, SECOND } from "../../helpers";
import { LayoutInterface } from "../../interfaces";
export const FirstLayout = () => {
  const { firstLayout } = useSelector(
    (state: { layout: { firstLayout: LayoutInterface[] } }) => state.layout
  );
  const { handleGrid } = useGrid(FIRST, SECOND);

  return (
    <Layout
      handleGrid={handleGrid}
      gridLayout={firstLayout}
      layoutNumber={FIRST}
    />
  );
};
