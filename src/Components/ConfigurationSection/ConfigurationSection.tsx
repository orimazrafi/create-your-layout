import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageHeadline } from "../../Elements/PageHeadline";
import { GridItem } from "../../Elements/GridItem";
import Grid from "@material-ui/core/Grid";
import { ConfigurationWrapper } from "../../Elements/ConfigurationWrapper";
import { useHistory } from "react-router-dom";
import { LayoutInterface } from "../../interfaces";
import {
  reduxSetGridLayout,
  reduxSetOnlyLayout,
} from "../../Features/Layout/LayoutSlice";
const log = console.log;

export const ConfigurationSection = () => {
  const history = useHistory();
  const dragNode = useRef<any>();
  const elementTo = useRef<any>();
  const elementFrom = useRef<any>();
  const dispatch = useDispatch();
  const { layout, draggedIndex, components } = useSelector(
    (state: {
      layout: {
        layout: LayoutInterface[];
        draggedIndex: any;
        components: any;
      };
    }) => state.layout
  );
  if (layout?.length < 1) history.push("/");
  const handleDragEnter = (e: any, index: number) => {
    setElement(elementTo, index);
    log({ draggedIndex });
    if (draggedIndex !== null) {
      const componentsDuplicate = createDeepClone(components);
      const layoutDuplicate = createDeepClone(layout);
      layoutDuplicate[index].component = components[draggedIndex];
      dispatch(reduxSetGridLayout(componentsDuplicate, layoutDuplicate));
    }
  };
  const createDeepClone = (original: any) =>
    JSON.parse(JSON.stringify(original));

  const handleDragFromLayout = (e: any, index: any) => {
    setElement(elementFrom, index);
    addEventToRef(dragNode, e);
  };

  const handleDragEnd = () => {
    removeEventToRef(dragNode);
    const layoutDuplicate = createDeepClone(layout);
    swapPlaces(layoutDuplicate, elementTo, elementFrom);
    dispatch(reduxSetOnlyLayout(layoutDuplicate));
    resetRef(elementTo, dragNode);
  };
  const addEventToRef = (ref: any, e: any) => {
    ref.current = e.target;
    ref.current.addEventListener("dragend", handleDragEnd);
  };
  const removeEventToRef = (ref: any) => {
    ref.current.removeEventListener("dragend", handleDragEnd);
  };
  const swapPlaces = (
    layoutDuplicate: any,
    elementTo: any,
    elementFrom: any
  ) => {
    layoutDuplicate[elementTo.current.index].component =
      elementFrom.current.content;
    layoutDuplicate[elementFrom.current.index].component =
      elementTo.current.content;
  };
  const setElement = (e: any, index: number) => {
    e.current = {
      index,
      content: layout[index].component,
    };
  };

  const resetRef = (e: any, e2: any) => {
    e.current.index = null;
    e.current.content = "";
    e2.current = null;
  };

  return (
    <>
      <ConfigurationWrapper>
        <PageHeadline>Configuration</PageHeadline>
        <Grid container spacing={3}>
          {layout.length > 0 &&
            layout.map((l: LayoutInterface, index: number) => (
              <Grid item xs={l.width} key={index}>
                <GridItem
                  height={l.height}
                  draggable
                  onDragStart={(e) => handleDragFromLayout(e, index)}
                  onDragEnter={(e) => handleDragEnter(e, index)}
                >
                  {l.component}
                </GridItem>
              </Grid>
            ))}
        </Grid>
      </ConfigurationWrapper>
    </>
  );
};
