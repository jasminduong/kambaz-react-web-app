import { createSlice } from "@reduxjs/toolkit";

// Redux declares and manages state in separate reducers which then provide the state to the entire application
// helloReducer maintains a state that consists of just a message state string initialized to Hello World

{/* declares initial state as a message "Hello World"*/}
const initialState = {
  message: "Hello World",
};

{/* declares a reducer with the initialState */}
const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});
export default helloSlice.reducer;