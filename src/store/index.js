import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import customTestSlice from "./slices/customTestSlice";
import favouriteSlice from "./slices/favouriteSlice";
import authSlice from "./slices/authSlice";
import categoriesSlice from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    customTest: customTestSlice,
    favouriteSlice: favouriteSlice,
    auth: authSlice,
    categories: categoriesSlice,
  },
});
