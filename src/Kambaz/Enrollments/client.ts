import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

// Enrollments client.ts integrates with the enrollments routes implemented in the server

// retrieves all enrollments
export const findEnrollmentsByUser = async (user: string) => {
  const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}/${user}`);
  return data;
};

// enrolls user in course
export const enrollUser = async (user: string, course: string) => {
  const response = await axiosWithCredentials.post(ENROLLMENTS_API, {
    user,
    course,
  });
  return response.data;
};

// deletes the user from a course
export const unenrollUser = async (user: string, course: string) => {
  console.log("=== CLIENT: Unenrolling user ===");
  console.log("User ID:", user);
  console.log("Course ID:", course);
  console.log("DELETE URL:", `${ENROLLMENTS_API}/${user}/${course}`);

  try {
    const response = await axiosWithCredentials.delete(
      `${ENROLLMENTS_API}/${user}/${course}`
    );
    console.log("Unenroll response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Client unenroll error:", error);
    throw error;
  }
};
