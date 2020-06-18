import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  reduxSetActiveLayoutAndNumber,
  reduxSetLayout,
} from "../Features/Layout/LayoutSlice";
import { LayoutInterface } from "../interfaces";
import { add } from "../helpers";
export const useGrid = (
  layoutNumberThatWasClicked: string,
  otherLayoutNumber: string
) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { layout, activeLayout } = useSelector(
    (state: { layout: { layout: LayoutInterface[]; activeLayout: string } }) =>
      state.layout
  );
  const handleGrid = () => {
    if (!activeLayout)
      dispatch(reduxSetActiveLayoutAndNumber(layoutNumberThatWasClicked));
    if (activeLayout === layoutNumberThatWasClicked)
      dispatch(reduxSetLayout(layout));
    if (activeLayout === otherLayoutNumber) {
      const numberOfColoredComponents = [...layout].reduce(add, 0);
      if (
        !numberOfColoredComponents ||
        window.confirm(`this will erase your ${otherLayoutNumber} layout`)
      ) {
        dispatch(reduxSetActiveLayoutAndNumber(layoutNumberThatWasClicked));
      } else return;
    }
    history.push("/configuration");
  };
  return { handleGrid };
};
