import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

// create reducer's initial state with default assignments copied from database
const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = [...state.assignments, assignment];
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      // assignments's ID to delete is in action.payload
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId
      ); // filter out assignment to delete
    },
    updateAssignment: (state, { payload: assignment }) => {
      // assignment to update is in action.payload
      state.assignments = state.assignments.map(
        (m: any) => (m._id === assignment._id ? assignment : m)
        // replace assignments whose ID matches action.payload._id
      );
    },
    editAssignment: (state, { payload: assignmentId }) => {
      // select the assignment to edit
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions; // export all reducer functions
export default assignmentsSlice.reducer; // export reducer
