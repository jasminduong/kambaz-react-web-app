import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Courses client.ts integrates with the courses routes implemented in the server 

// fetchAllCourses retrieves all courses 
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};
