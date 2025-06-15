import { useState } from "react";
export default function BooleanStateVariables() {
  {
    /* declare and initialize boolean variable */
  }
  const [done, setDone] = useState(true);

  return (
    <div id="wd-boolean-state-variables">
      <h4>Boolean State Variables</h4>
      {/* render content based on boolean state variable value */}
      <p>{done ? "Done" : "Not done"}</p>{" "}
      <label className="form-control">
        {/* change state variable value when handling events like clicking a checkbox */}
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />{" "}
        Done
      </label>
      {/* render content based on boolean state variable value */}
      {done && <div className="alert alert-success">Yay! you are done</div>}
      <hr />
    </div>
  );
}
