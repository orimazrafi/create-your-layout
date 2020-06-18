import { useDispatch } from "react-redux";
import { reduxSetDragComponent } from "../Features/Layout/LayoutSlice";

export const useDragEnd = (
  setDragging: React.Dispatch<React.SetStateAction<boolean>>,
  removeEventToRef: (ref: React.MutableRefObject<any>) => void,
  dragNode: React.MutableRefObject<any>
) => {
  const dispatch = useDispatch();
  const handleDragEnd = () => {
    setDragging(false);
    removeEventToRef(dragNode);
    dispatch(reduxSetDragComponent(null));
  };
  return { handleDragEnd };
};
