import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { Button, FormControl } from "react-bootstrap";

export default function AddRedux() {
  {
    /* a and b are state variables to edit and parameters to add in the reducer */
  }
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  {
    /* reads the sum state variable from the reducer */
  }
  const { sum } = useSelector((state: any) => state.addReducer);
  {
    /* dispatchs to call add redux function */
  }
  const dispatch = useDispatch();
  return (
    <div className="w-25" id="wd-add-redux">
      <h4>Add Redux</h4>
      {/* renders local state variables a and b, as well as application state variable sum */}
      <h5>
        {a} + {b} = {sum}
      </h5>
      {/* updates the local component state variable a */}
      <FormControl
        type="number"
        defaultValue={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      {/* updates the local component state variable b */}
      <FormControl
        type="number"
        defaultValue={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      {/* on click, call add reducer function to compute the arithmetic addition of a and b, 
      and store it in application state variable sum */}
      <Button id="wd-add-redux-click" onClick={() => dispatch(add({ a, b }))}>
        Add Redux
      </Button>
      <hr />
    </div>
  );
}
