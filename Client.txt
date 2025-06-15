import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

// Enrollments client.ts integrates with the enrollments routes implemented in the server

// retrieves all enrollments
export const findEnrollmentsByUser = async (user: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/${user}`);
  return data;
};

// enrolls user in course
export const enrollUser = async (user: string, course: string) => {
  const response = await axios.post(ENROLLMENTS_API, { user, course });
  return response.data;
};

// deletes the user from a course
export const unenrollUser = async (user: string, course: string) => {
  const { data } = await axios.delete(ENROLLMENTS_API, {
    data: { user, course },
  });
  return data;
};
