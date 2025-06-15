import { createSlice } from "@reduxjs/toolkit";

{/* initialize the state variable count to 0 */}
const initialState = {
  count: 0,
};

{/* reducer function increment and decrement updates the state variable by manipulating their state parameter */}
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
