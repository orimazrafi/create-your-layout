import React, { useState, useRef } from "react";
import { ComponentsWrapper } from "../../Elements/ComponentsWrapper";
import { PageHeadline } from "../../Elements/PageHeadline";
import { ComponentsListWrapper } from "../../Elements/ComponentsListWrapper";
import { List } from "@material-ui/core";
import { ListItemContainer } from "../../Elements/ListItemContainer";
import { useDispatch } from "react-redux";
import { reduxSetDragComponent } from "../../Features/Layout/LayoutSlice";
import { useSelector } from "react-redux";
import "./ComponentsSection.css";
// eslint-disable-next-line
const log = console.log;
export const ComponentsSection = () => {
  const { components } = useSelector(
    (state: { layout: { components: string[] } }) => state.layout
  );
  const dispatch = useDispatch();
  const dragItem = useRef<number | null>();
  const dragNode = useRef<any>();

  const [dragging, setDragging] = useState(false);
  const handleDragStart = (e: any, index: number) => {
    dispatch(reduxSetDragComponent(index));
    dragItem.current = index;
    addEventRef(dragNode, e);
    setDragging(true);
  };
  const addEventRef = (ref: any, e: any) => {
    ref.current = e.target;
    ref.current.addEventListener("dragend", handleDragEnd);
  };
  const removeEventToRef = (ref: any, ref2: any) => {
    ref.current.removeEventListener("dragend", handleDragEnd);
    ref.current = null;
    ref2.current = null;
  };
  const handleDragEnd = () => {
    setDragging(false);
    removeEventToRef(dragNode, dragItem);
    dispatch(reduxSetDragComponent(null));
  };

  const getStyles = (index: number) => {
    let className = "drag-n-drop__item";
    if (index === dragItem.current) className += " active";
    return className;
  };
  return (
    <ComponentsWrapper>
      <PageHeadline>Components Section</PageHeadline>
      <ComponentsListWrapper>
        <List className="drag-n-drop">
          {components.map((component: string, index: number) => (
            <ListItemContainer
              button
              className={dragging ? getStyles(index) : "drag-n-drop__item"}
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
            >
              <div className="drag-n-drop__component">{component}</div>
            </ListItemContainer>
          ))}
        </List>
      </ComponentsListWrapper>
    </ComponentsWrapper>
  );
};
