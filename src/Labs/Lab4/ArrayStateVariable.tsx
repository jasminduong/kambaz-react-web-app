import { useState } from "react";

export default function ArrayStateVariable() {
  // declare array state
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  // event handler appends random number at end of array
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  // event handler removes element by index
  const deleteElement = (index: number) => {
    setArray(array.filter((_item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h4>Array State Variable</h4>
      {/* button calls addElement to append to array */}
      <button onClick={addElement}>Add Element</button>
      <ul>
        {/* iterate over array elements */}
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteElement(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
