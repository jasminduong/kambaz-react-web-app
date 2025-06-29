import { createSlice } from "@reduxjs/toolkit";

// Define the course interface
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
  color: string;
  description: string;
}

// Define the state interface
interface CourseState {
  courses: Course[];
  course: Course;
}

const initialState: CourseState = {
  courses: [], 
  course: {
    _id: "",
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
      state.courses.push(course); 
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((m) => m._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c) =>
        c._id === course._id ? course : c
      );
    },
    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse, setCourses } =
  courseSlice.actions;

export default courseSlice.reducer;
