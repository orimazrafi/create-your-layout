import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../Redux/store";
import { FIRST } from "../../helpers";
const firstLayout = [
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
const secondLayout = [
  { width: 12, height: "50px", component: "" },
  { width: 6, height: "100px", component: "" },
  { width: 6, height: "100px", component: "" },
  { width: 12, height: "100px", component: "" },
  { width: 12, height: "50px", component: "" },
];
const layout = createSlice({
  name: "layout",
  initialState: {
    components: ["#00dcff", "#ff00a5", "#2ee82e", "#345234", "#b2b511"],
    layout: [],
    firstLayout,
    secondLayout,
    activeLayout: null,
    draggedIndex: null,
  },
  reducers: {
    setActiveLayout: (state, action) => {
      state.layout = action.payload.layout;
      state.activeLayout = action.payload.activeLayout;
    },
    reduxSetDragComponent: (state, action) => {
      state.draggedIndex = action.payload;
    },
    reduxSetGridLayout: (state, action) => {
      state.layout = action.payload;
      state.draggedIndex = null;
    },

    reduxSetOnlyLayout: (state, action) => {
      state.layout = action.payload;
    },
    reduxSetLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

export const {
  setActiveLayout,
  reduxSetDragComponent,
  reduxSetGridLayout,
  reduxSetOnlyLayout,
  reduxSetLayout,
} = layout.actions;
export default layout.reducer;

export const reduxSetActiveLayout = (activeLayout: string) => (
  dispatch: AppDispatch
) => {
  const layout = activeLayout === FIRST ? firstLayout : secondLayout;
  dispatch(setActiveLayout({ layout, activeLayout }));
};
