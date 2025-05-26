import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";
import { v4 as uuidv4 } from "uuid";

// create reducer's initial state with default modules copied from database
const initialState = {
  modules: modules,
};

const modulesSlice = createSlice({
  // create slice
  name: "modules", // name the slice
  initialState, // set initial state
  reducers: {
    // declare reducer functions
    addModule: (state, { payload: module }) => {
      // new module is in action.payload
      const newModule: any = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as any; // update modules in state adding new module
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
export const { addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions; // export all reducer functions
export default modulesSlice.reducer; // export reducer

