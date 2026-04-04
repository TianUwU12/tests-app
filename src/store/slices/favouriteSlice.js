import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favouriteSlice",
  //   initialState: JSON.parse(localStorage.getItem("theory")) || [], //х
  initialState: [], //х

  reducers: {
    addTheory: (state, { payload }) => {
      console.log(payload);
      //   localStorage.setItem("theory", JSON.stringify(payload));
      state.push(payload);
      // state.push(payload)
    },
    deleteTheory: (state, { payload }) => {
      console.log(payload);
      //   localStorage.setItem("theory", JSON.stringify(payload));
      const index = state.findIndex((elem) => elem.id === payload);
      //splice + index
      // state.push(payload)
    },
    toggleTheory: (state, { payload }) => {
      const existTheoryIndex = state.findIndex((theory)=>theory.id === payload.id)
      if (existTheoryIndex!=-1){
        state.splice(existTheoryIndex,1)
      }
      else{
        state.push(payload);
      }
    }
  },
});

export const { addTheory,toggleTheory } = favouriteSlice.actions;
export default favouriteSlice.reducer;
