import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import todos from "./todos.json";

/* For every item in the todos json, returns the TodoItem object with its properties */
export default function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <ListGroup>
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </ListGroup>
      <hr />
    </>
  );
}
