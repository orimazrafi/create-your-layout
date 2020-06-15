import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "../Features/Layout/LayoutSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    layout: LayoutSlice,
  },
  middleware: [thunk],
});
export default store;
export type AppDispatch = typeof store.dispatch;
