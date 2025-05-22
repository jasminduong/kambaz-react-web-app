import { useState } from "react";
export default function Counter() {
  {
    /* create and initialize state variable
    const [stateVariable, setStateVariable] = useState(initialStateValue);
    stateVariable = count
    initial state value = 7
    mutator function = setCount */
  }
  const [count, setCount] = useState(7);
  {
    /* print changes of the variable to the console*/
  }
  console.log(count);

  return (
    <div id="wd-counter-use-state">
      {/* render variable */}
      <h4>Integer State Variables</h4>
      <h3>Counter: {count}</h3>
      {/* render state variable handle events and update state variable with mutator now updates DOM as desired */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        id="wd-counter-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
