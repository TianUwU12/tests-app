import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import customTestSlice from "./slices/customTestSlice";
import favouriteSlice from "./slices/favouriteSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    customTest: customTestSlice,
    favouriteSlice: favouriteSlice,
  },
});
