import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../Redux/store";
import { LayoutInterface } from "../../interfaces";
const layout1 = [
  { width: 12, height: "50px", component: "" },
  { width: 6, height: "150px", component: "" },
  { width: 6, height: "150px", component: "" },
  { width: 3, height: "50px", component: "" },
  { width: 3, height: "50px", component: "" },
  { width: 3, height: "50px", component: "" },
  { width: 3, height: "50px", component: "" },
  { width: 3, height: "50px", component: "" },
  { width: 3, height: "50px", component: "" },
  { width: 3, height: "50px", component: "" },
  { width: 3, height: "50px", component: "" },
];
const layout2 = [
  { width: 12, height: "50px", component: "" },
  { width: 6, height: "100px", component: "" },
  { width: 6, height: "100px", component: "" },
  { width: 12, height: "100px", component: "" },
  { width: 12, height: "50px", component: "" },
];
const layout = createSlice({
  name: "layout",
  initialState: {
    components: [1, 2, 3],
    layout: [],
    layout1,
    layout2,
    activeLayout: null,
    draggedIndex: null,
    layoutDraggedContent: null,
  },
  reducers: {
    setLayout: (state, action) => {
      state.layout = action.payload.layout;
      state.activeLayout = action.payload.activeLayout;
    },
    setDraggedComponent: (state, action) => {
      state.draggedIndex = action.payload;
    },
    setGridLayout: (state, action) => {
      state.components = action.payload.componentsDuplicate;
      state.layout = action.payload.layout;
      state.draggedIndex = null;
    },
    setLayoutDragged: (state, action) => {
      state.layoutDraggedContent = action.payload;
    },
    setOnlyLayout: (state, action) => {
      state.layout = action.payload;
    },
    setLayoutLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

export const {
  setLayout,
  setDraggedComponent,
  setGridLayout,
  setLayoutDragged,
  setOnlyLayout,
  setLayoutLayout,
} = layout.actions;
export default layout.reducer;

export const reduxSetActiveLayout = (activeLayout: string) => (
  dispatch: AppDispatch
) => {
  const layout = activeLayout === "first" ? layout1 : layout2;
  dispatch(setLayout({ layout, activeLayout }));
};

export const reduxSetDragComponent = (index: number | null) => (
  dispatch: AppDispatch
) => {
  dispatch(setDraggedComponent(index));
};
export const reduxSetGridLayout = (componentsDuplicate: any, layout: any) => (
  dispatch: AppDispatch
) => {
  dispatch(setGridLayout({ componentsDuplicate, layout }));
};
export const reduxSetOnlyLayout = (layout: any) => (dispatch: AppDispatch) => {
  dispatch(setOnlyLayout(layout));
};
export const reduxSetLayout = (layout: any) => (dispatch: AppDispatch) => {
  dispatch(setLayoutLayout(layout));
};
