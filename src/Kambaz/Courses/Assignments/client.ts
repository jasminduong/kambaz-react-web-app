import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

// Assignments client.ts integrates with the assigments routes implemented in the server

// creates an assignment 
export const createAssignment = async (assignment: any) => {
  console.log("=== CLIENT: Creating assignment ===");
  console.log("Assignment data:", assignment);
  
  try {
    const response = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
    console.log("Assignment created response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Client error creating assignment:", error);
    throw error;
  }
};

// deletes an assignmnet
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  };

// updates an assignment
export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};
