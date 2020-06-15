import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../Redux/store";
import { LayoutInterface } from "../../interfaces";

const layout = createSlice({
  name: "layout",
  initialState: {
    layout: [],
  },
  reducers: {
    setLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

export const { setLayout } = layout.actions;
export default layout.reducer;

export const reduxSetLayout = (layout: LayoutInterface[]) => (
  dispatch: AppDispatch
) => {
  //   await
  dispatch(setLayout(layout));
};
