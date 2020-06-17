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
import {
  swapPlaces,
  resetRef,
  setElement,
  createDeepClone,
  DRAGEND,
} from "../../helpers";
// eslint-disable-next-line
const log = console.log;

export const ConfigurationSection = () => {
  const history = useHistory();
  const dragNode: React.MutableRefObject<any> = useRef();
  const elementTo: React.MutableRefObject<any> = useRef();
  const elementFrom: React.MutableRefObject<any> = useRef<any>();
  const dispatch = useDispatch();
  const { layout, draggedIndex, components } = useSelector(
    (state: {
      layout: {
        layout: LayoutInterface[];
        draggedIndex: number;
        components: string[];
      };
    }) => state.layout
  );
  if (layout.length < 1) history.push("/");
  const handleDragEnter = (index: number) => {
    setElement(elementTo, index, layout);
    if (draggedIndex !== null) {
      const layoutDuplicate = createDeepClone(layout);
      layoutDuplicate[index].component = components[draggedIndex];
      dispatch(reduxSetGridLayout(layoutDuplicate));
    }
  };

  const handleDragFromLayout = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setElement(elementFrom, index, layout);
    addEventToRef(dragNode, e);
  };

  const handleDragEnd = () => {
    removeEventToRef(dragNode);
    const layoutDuplicate = createDeepClone(layout);
    swapPlaces(layoutDuplicate, elementTo, elementFrom);
    dispatch(reduxSetOnlyLayout(layoutDuplicate));
    resetRef(elementTo, dragNode);
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
                onDragStart={(e) => handleDragFromLayout(e, index)}
                onDragEnter={() => handleDragEnter(index)}
              ></GridItem>
            </Grid>
          ))}
      </Grid>
    </ConfigurationWrapper>
  );
};
