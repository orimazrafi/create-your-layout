import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "../Features/Layout/LayoutSlice";

const store = configureStore({
  reducer: {
    layout: LayoutSlice,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
