import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/* Assignments top controls with search bar, group, assignment buttons */
export default function AssignmentsControl() {
  const navigate = useNavigate();
  const { cid } = useParams(); 

  // generates new id and navigates to assignment editor to add assignment 
  const handleAddAssignment = () => {
    const newId = uuidv4(); 
    navigate(`/Kambaz/Courses/${cid}/Assignments/Editor/${newId}`);
  };

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
          onClick={handleAddAssignment}
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
