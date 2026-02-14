import { createSlice } from "@reduxjs/toolkit";

const customTestSlice = createSlice({
  name: "customTestSlice",
  initialState: JSON.parse(localStorage.getItem("questions")) || [], //х

  reducers: {
    setCustomTest: (__, { payload }) => {
      console.log(payload);
      localStorage.setItem("questions", JSON.stringify(payload));
      return payload;
      // state.push(payload)
    },
  },
});

export const { setCustomTest } = customTestSlice.actions;
export default customTestSlice.reducer;
