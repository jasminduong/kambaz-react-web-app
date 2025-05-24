import { createSlice } from "@reduxjs/toolkit";

// reducer that keeps track of the arithmetic addition of two parameters
const initialState = {
  sum: 0,
};

{
  /* when calling add reducer function, parameters are encoded as an object into a payload property found in the action parameter 
    passed to the reducer function */
}
{
  /* action.payload.a and action.payload.b are extracted from function and then used to update the sum state variable */
}
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action) => {
      state.sum = action.payload.a + action.payload.b;
    },
  },
});
export const { add } = addSlice.actions;
export default addSlice.reducer;
