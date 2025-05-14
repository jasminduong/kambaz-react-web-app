import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Button } from "react-bootstrap";

/* Assignments top controls with search bar, group, assignment buttons */
/*<input placeholder="Search for Assignments" id="wd-search-assignment" />
<button id="wd-add-assignment-group">+ Group</button>
<button id="wd-add-assignment">+ Assignment</button>*/
export default function AssignmentsControl() {
  return (
    <div id="wd-modules-controls" className="d-flex gap-2 text-nowrap">
      <div className="position-relative">
        <IoIosSearch
          className="position-absolute search-icon"
          style={{
            fontSize: "20px",
            color: "#6c757d",
            marginTop: "6px",
            marginLeft: "7px",
          }}
        />
        <input
          type="text"
          placeholder="Search..."
          id="wd-search-assignment"
          className="form-control ps-5 py-1"
        />
      </div>

      <div className="d-flex gap-2 ms-auto">
        <Button
          variant="secondary"
          size="sm"
          className="float-end bg-gray-fill"
          id="wd-add-module-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </Button>

        <Button
          variant="danger"
          size="sm"
          className="float-end"
          id="wd-add-module-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Button>
      </div>
    </div>
  );
}
