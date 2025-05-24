import { createSlice } from "@reduxjs/toolkit";

// declare initial state of reducer
const initialState = {
  // moved here from TodoList.tsx
  todos: [
    // todos has default todos
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};
const todosSlice = createSlice({ // create slice
  name: "todos", // name slice
  initialState, // configure store's initial state
  reducers: { // declare reducer functions
    addTodo: (state, action) => { // addTodo reducer function, action
      const newTodos = [ // contains new todos
        ...state.todos, // copy old todos, append new todo
        { ...action.payload, id: new Date().getTime().toString() }, // in action.payload, override; id as timestamp
      ];
      state.todos = newTodos; // update todos
      state.todo = { title: "" }; // clear todo
    },
    deleteTodo: (state, action) => { // deleteTodo reducer function
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload); // action contains todo's ID to filter out of newTodos
      state.todos = newTodos;
    },
    updateTodo: (state, action) => { // updateTodo reducer function
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item // rebuilding newTodos by replacing old todo with new todo in action.payload
      );
      state.todos = newTodos; // update todos
      state.todo = { title: "" }; // clear todo
    },
    setTodo: (state, action) => { // setTodo reducer function to update todo state variable
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions; // export reducer functions
export default todosSlice.reducer; // export reducer for store




