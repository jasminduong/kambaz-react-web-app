import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../Kambaz/Database";

const initialState = {
  courses: courses,
  course: {
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.png",
    color: "#0A64A9",
    description: "New Description",
  },
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourse: (state, { payload: course }) => {
      state.course = course;
    },
    addCourse: (state, { payload: course }) => {
      state.courses = [...state.courses, course];
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((m: any) => m._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      );
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse } =
  courseSlice.actions;

export default courseSlice.reducer;
