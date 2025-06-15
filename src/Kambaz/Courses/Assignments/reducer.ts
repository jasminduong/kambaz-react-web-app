import { createSlice } from "@reduxjs/toolkit";

// create reducer's initial state with default assignments copied from database
interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  module: string;
  points: number;
  availableDate: string;
  dueDate: string;
}

interface AssignmentState {
  assignments: Assignment[];
}

const initialState: AssignmentState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: assignment }) => {
      state.assignments.push(assignment);
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
        (a: any) => (a._id === assignment._id ? assignment : a)
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
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions; // export all reducer functions
export default assignmentsSlice.reducer; // export reducer
