import React, { useState, useRef } from "react";
import { ComponentsWrapper } from "../../Elements/ComponentsWrapper";
import { PageHeadline } from "../../Elements/PageHeadline";
import { ComponentsListWrapper } from "../../Elements/ComponentsListWrapper";
import { List } from "@material-ui/core";
import { ListItemContainer } from "../../Elements/ListItemContainer";
import { useDispatch } from "react-redux";
import { reduxSetDragComponent } from "../../Features/Layout/LayoutSlice";
import { useSelector } from "react-redux";
import { getStyles, DRAGEND } from "../../helpers";
import "./ComponentsSection.css";

// eslint-disable-next-line
const log = console.log;
export const ComponentsSection = () => {
  const { components } = useSelector(
    (state: { layout: { components: string[] } }) => state.layout
  );
  const dispatch = useDispatch();
  const dragItem: React.MutableRefObject<any> = useRef();
  const dragNode: React.MutableRefObject<any> = useRef();
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    dispatch(reduxSetDragComponent(index));
    dragItem.current = index;
    addEventRef(dragNode, e);
    setDragging(true);
  };
  const addEventRef = (
    ref: React.MutableRefObject<any>,
    e: React.DragEvent<HTMLDivElement>
  ) => {
    ref.current = e.target;
    ref.current.addEventListener(DRAGEND, handleDragEnd);
  };
  const removeEventToRef = (ref: React.MutableRefObject<any>, ref2: any) => {
    ref.current.removeEventListener(DRAGEND, handleDragEnd);
    ref.current = null;
    ref2.current = null;
  };
  const handleDragEnd = () => {
    setDragging(false);
    removeEventToRef(dragNode, dragItem);
    dispatch(reduxSetDragComponent(null));
  };

  return (
    <ComponentsWrapper>
      <PageHeadline>Components</PageHeadline>
      <ComponentsListWrapper>
        <List>
          {components.map((component: string, index: number) => (
            <ListItemContainer
              button
              color={component}
              className={dragging ? getStyles(index, dragItem) : ""}
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
            ></ListItemContainer>
          ))}
        </List>
      </ComponentsListWrapper>
    </ComponentsWrapper>
  );
};
