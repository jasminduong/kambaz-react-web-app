import { createSlice } from "@reduxjs/toolkit";

/* Reducer holds all data points available globally */
/* Used for when there are multiple screens, each with their own set of state variables that change over time */
// create reducer's initial state with default modules copied from database
const initialState = {
  modules: [],
};

// create slice -
const modulesSlice = createSlice({
  name: "modules", // name the slice
  initialState, // set initial state data
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    // declare reducer mutator functions
    addModule: (state, { payload: module }) => {
      state.modules = [...state.modules, module] as any;
    },

    deleteModule: (state, { payload: moduleId }) => {
      // module's ID to delete is in action.payload
      state.modules = state.modules.filter((m: any) => m._id !== moduleId); // filter out module to delete
    },
    updateModule: (state, { payload: module }) => {
      // module to update is in action.payload
      state.modules = state.modules.map(
        (
          m: any // replace module whose ID matches action.payload._id
        ) => (m._id === module._id ? module : m)
      ) as any;
    },

    editModule: (state, { payload: moduleId }) => {
      // select the module to edit
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions; // export all reducer functions
export default modulesSlice.reducer; // export reducer
