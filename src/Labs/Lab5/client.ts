import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export const fetchWelcomeMessage = async () => {
  // axios sends an asynchronous request to the server and then capture the response in the user interface,
  // without navigating to the URL, away from the current window
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

// fetches the assignment object from the server
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};
// fetches the assignment title to be updated
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};
export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
  };  

// fetches the todos from the server
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

// fetches the todo to be deleted
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

// fetches the todo to be created
export const createTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};
// posts (creates) new todo objects to the server
// contains the todo instance added to the todos array in the server instead of all the todos on the server
export const postTodo = async (todo: any) => {
  const response = await axios.post(`${TODOS_API}`, todo);
  return response.data;
};
