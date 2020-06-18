import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageHeadline } from "../../Elements/PageHeadline";
import { GridItem } from "../../Elements/GridItem";
import Grid from "@material-ui/core/Grid";
import { ConfigurationWrapper } from "../../Elements/ConfigurationWrapper";
import { useHistory } from "react-router-dom";
import { LayoutInterface } from "../../interfaces";
import {
  reduxSetGridLayout,
  reduxSetLayout,
} from "../../Features/Layout/LayoutSlice";
import {
  swapPlaces,
  resetRef,
  setDraggedElement,
  createDeepClone,
  DRAGEND,
  isElementDraggedFromHasColor,
  isElementDraggedFromComponents,
} from "../../helpers";
// eslint-disable-next-line
const log = console.log;

export const ConfigurationSection = () => {
  const { layout, draggedIndex, components } = useSelector(
    (state: {
      layout: {
        layout: LayoutInterface[];
        draggedIndex: number;
        components: string[];
      };
    }) => state.layout
  );
  const history = useHistory();
  if (layout.length < 1) history.push("/");

  const dragNode: React.MutableRefObject<any> = useRef();
  const elementFrom: React.MutableRefObject<any> = useRef();
  const handleDragFromLayout = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setDraggedElement(elementFrom, index, layout);
    addEventToRef(dragNode, e);
  };

  const addEventToRef = (
    ref: React.MutableRefObject<any>,
    e: React.DragEvent<HTMLDivElement>
  ) => {
    ref.current = e.target;
    ref.current.addEventListener(DRAGEND, handleDragEnd);
  };

  const removeEventToRef = (ref: React.MutableRefObject<any>) => {
    ref.current.removeEventListener(DRAGEND, handleDragEnd);
  };

  const elementTo: React.MutableRefObject<any> = useRef();

  const dispatch = useDispatch();

  const switchingPlacesWithinTheLayout = () => {
    removeEventToRef(dragNode);
    const layoutDuplicate = createDeepClone(layout);
    swapPlaces(layoutDuplicate, elementTo, elementFrom);
    dispatch(reduxSetLayout(layoutDuplicate));
    resetRef(elementTo, dragNode);
  };

  const [
    draggedIntoIndexForHoverEffect,
    setDraggedIntoIndexForHoverEffect,
  ] = useState<null | number>(null);

  const handleDragEnd = () => {
    setDraggedIntoIndexForHoverEffect(null);
    setTimeout(switchingPlacesWithinTheLayout, 0);
  };

  const handleDrop = (index: number) => {
    setDraggedIntoIndexForHoverEffect(null);
    setDraggedElement(elementTo, index, layout);
    if (isElementDraggedFromComponents(draggedIndex)) {
      const layoutDuplicate = createDeepClone(layout);
      layoutDuplicate[index].component = components[draggedIndex];
      dispatch(reduxSetGridLayout(layoutDuplicate));
    }
  };
  const handleDragEnter = (index: number) => {
    if (
      isElementDraggedFromComponents(draggedIndex) ||
      isElementDraggedFromHasColor(elementFrom)
    )
      setDraggedIntoIndexForHoverEffect(index);
  };
  return (
    <ConfigurationWrapper>
      <PageHeadline>Configuration</PageHeadline>
      <Grid container spacing={3}>
        {layout.length > 0 &&
          layout.map((l: LayoutInterface, index: number) => (
            <Grid item xs={l.width} key={index}>
              <GridItem
                height={l.height}
                color={l.component}
                draggable
                onDragEnter={(e) => handleDragEnter(index)}
                onDragStart={(e) => handleDragFromLayout(e, index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(index)}
                className={
                  draggedIntoIndexForHoverEffect === index ? "hover" : ""
                }
              ></GridItem>
            </Grid>
          ))}
      </Grid>
    </ConfigurationWrapper>
  );
};
