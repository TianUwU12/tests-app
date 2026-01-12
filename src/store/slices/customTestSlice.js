import { createSlice } from "@reduxjs/toolkit";

const customTestSlice = createSlice({
  name: "customTestSlice",
  initialState: [], //х

  reducers: {
    setCustomTest: (__, { payload }) => {
      console.log(payload);
      return payload;
      // state.push(payload)
    },
  },
});

export const { setCustomTest } = customTestSlice.actions;
export default customTestSlice.reducer;
