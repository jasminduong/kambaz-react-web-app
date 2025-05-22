import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function DateStateVariable() {
  {
    /* declare and initialize with today's date */
  }
  const [startDate, setStartDate] = useState(new Date());

  {
    /* utility function to convert date object to YYYY-MM-DD format for HTML date picker */
  }
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };

  return (
    <div id="wd-date-state-variables">
      <h4>Date State Variables</h4>
      {/* display raw date object */}
      <h5>{JSON.stringify(startDate)}</h5>
      {/* display in YYYY-MM-DD format for input of type date */}
      <h5>{dateObjectToHtmlDateString(startDate)}</h5>
      {/* set HTML input type to date */}
      {/* update when you change the date with the date picker */}
      <FormControl
        type="date"
        defaultValue={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
      <hr />
    </div>
  );
}
