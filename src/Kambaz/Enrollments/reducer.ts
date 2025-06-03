import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
  enrollment: {
    _id: "0",
    user: "",
    course: "",
  },
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollment: (state, { payload: enrollment }) => {
      state.enrollment = enrollment;
    },
    enrollUser: (state, { payload: enrollment }) => {
      const exists = state.enrollments.some(
        (e) => e.user === enrollment.user && e.course === enrollment.course
      );
      if (!exists) {
        state.enrollments.push(enrollment);
      }
    },
    unenrollUser: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course)
      );
    },
  },
});

export const { setEnrollment, enrollUser, unenrollUser } =
  enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
