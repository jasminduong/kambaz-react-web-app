import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Assignments client.ts integrates with the assigments routes implemented in the server

// deletes an assignmnet
export const deleteAssignment = async (assignmentId: string) => {
    console.log("Sending DELETE request to:", `${ASSIGNMENTS_API}/${assignmentId}`);
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    console.log("Response from server:", response.data);
    return response.data;
  };

// updates an assignment
export const updateAssignment = async (assignment: any) => {
  const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};
