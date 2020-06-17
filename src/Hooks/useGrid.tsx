import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  reduxSetActiveLayout,
  reduxSetLayout,
} from "../Features/Layout/LayoutSlice";
import { LayoutInterface } from "../interfaces";
export const useGrid = (layoutNumber: string, otherLayoutNumber: string) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { layout, activeLayout } = useSelector(
    (state: { layout: { layout: LayoutInterface[]; activeLayout: string } }) =>
      state.layout
  );
  const handleGrid = () => {
    if (!activeLayout) dispatch(reduxSetActiveLayout(layoutNumber));
    if (activeLayout === layoutNumber) dispatch(reduxSetLayout(layout));
    if (activeLayout === otherLayoutNumber) {
      const addSum = (a: LayoutInterface | number | any, b: LayoutInterface) =>
        (a += b.component ? 1 : 0);
      const sum = [...layout].reduce(addSum, 0);
      if (
        !sum ||
        window.confirm(`this will erase your ${otherLayoutNumber} layout`)
      ) {
        dispatch(reduxSetActiveLayout(layoutNumber));
      } else return;
    }
    history.push("/configuration");
  };
  return { handleGrid };
};
