import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";

/* Store collects all reducers into a single store */
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer
  },
});
export default store;
