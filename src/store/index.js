import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import customTestSlice from "./slices/customTestSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    customTest: customTestSlice,
  },
});
