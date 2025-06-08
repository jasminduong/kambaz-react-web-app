import { useEffect, useState } from "react";
import * as client from "./client";
import { FormControl } from "react-bootstrap";
export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});

  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment(); // fetches assignment from client
    setAssignment(assignment); // sets assignment
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title); // fetches assignment title from client
    setAssignment(updatedAssignment); // updates assignment title
  };

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <FormControl
        defaultValue={assignment.title}
        className="mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <FormControl
        as="textarea"
        rows={3}
        defaultValue={assignment.description}
        className="mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <FormControl
        type="date"
        className="mb-2"
        defaultValue={assignment.due}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-completed"
          defaultChecked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-completed">
          {" "}
          Completed{" "}
        </label>
      </div>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
      <button
        className="btn btn-primary me-2"
        onClick={() => updateTitle(assignment.title)} // updates title, when refresh, title is changed
      >
        Update Title
      </button>
      <hr />
    </div>
  );
}
