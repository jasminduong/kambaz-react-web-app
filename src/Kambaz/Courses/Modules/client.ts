import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const axiosWithCredentials = axios.create({ withCredentials: true });

// Modules client.ts integrates with the modules routes implemented in the server

// adds a module
export const createModule = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `/api/courses/${courseId}/modules`,
    module
  );
  return response.data;
};

// deletes a module
export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(
    `${MODULES_API}/${moduleId}`
  );
  return response.data;
};

// updates a module
export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module
  );
  return data;
};
