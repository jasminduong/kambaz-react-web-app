import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import JsonStringify from "./JsonStringify";
import ImpliedReturn from "./ImpliedReturn";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TenaryOperator from "./TenaryOperator";
import TodoList from "./TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function Lab3() {
  console.log("Hello World!");
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TenaryOperator />
      <h4>Conditional Output If Else</h4>
      <ConditionalOutputIfElse />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Add a={3} b={4} />
      <h4>Child Components</h4>
      <h5>Square of 4</h5>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <hr></hr>
      <PathParameters />
    </div>
  );
}
