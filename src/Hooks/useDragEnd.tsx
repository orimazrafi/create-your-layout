import { useDispatch } from "react-redux";
import { reduxSetDragComponent } from "../Features/Layout/LayoutSlice";

export const useDragEnd = (
  setDragging: any,
  removeEventToRef: any,
  dragNode: any
) => {
  const dispatch = useDispatch();
  const handleDragEnd = () => {
    setDragging(false);
    removeEventToRef(dragNode);
    dispatch(reduxSetDragComponent(null));
  };
  return { handleDragEnd };
};
