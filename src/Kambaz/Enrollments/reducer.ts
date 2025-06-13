import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
  enrollment: Enrollment;
}

const initialState: EnrollmentState = {
  enrollments: [], 
  enrollment: {
    _id: "",
    user: "",
    course: "",
  },
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },

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

    clearEnrollments: (state) => {
      state.enrollments = [];
    },
  },
});

export const {
  setEnrollments,
  setEnrollment,
  enrollUser,
  unenrollUser,
  clearEnrollments,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
