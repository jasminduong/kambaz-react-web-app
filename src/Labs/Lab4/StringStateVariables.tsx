import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function StringStateVariables() {
  {
    /* declare and initialize state variable */
  }
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <h4>String State Variables</h4>
      {/* render string state variable */}
      <p>{firstName}</p>
      {/* initialize a text input field with the state variable */}
      {/* update the state variable at each key stroke */}
      <FormControl
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <hr />
    </div>
  );
}
