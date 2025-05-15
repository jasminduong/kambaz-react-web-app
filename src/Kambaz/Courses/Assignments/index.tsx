import { ListGroup } from "react-bootstrap";
import AssignmentsControl from "./AssignmentsControl";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { PiNotePencilLight } from "react-icons/pi";
import IndAssignmentControlButtons from "./IndAssignmentControlButtons";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControl />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-6 border-lesson-outline">
          <div className="wd-title p-3 ps-2 bg-gray-fill">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS{" "}
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <Link
              to="/Kambaz/Courses/1234/Assignments/Editor"
              className="text-decoration-none"
            >
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilLight
                      className="me-3 fs-4"
                      style={{ color: "green" }}
                    />
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold me-3" id="wd-assignment-title">
                          A1
                        </div>
                      </div>

                      <div className="text-muted small mt-1">
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <strong>Not available until</strong> May 6 at 12:00am |
                        <br />
                        <strong>Due</strong> May 13 at 11:59pm | 100 pts
                      </div>
                    </div>
                  </div>

                  <div className="mt-1">
                    <IndAssignmentControlButtons />
                  </div>
                </div>
              </ListGroup.Item>
            </Link>
          </ListGroup>

          <ListGroup className="wd-lessons rounded-0">
            <Link
              to="/Kambaz/Courses/1234/Assignments/Editor"
              className="text-decoration-none"
            >
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilLight
                      className="me-3 fs-4"
                      style={{ color: "green" }}
                    />
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold me-3" id="wd-assignment-title">
                          A2
                        </div>
                      </div>

                      <div className="text-muted small mt-1">
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <strong>Not available until</strong> May 13 at 12:00am |
                        <br />
                        <strong>Due</strong> May 20 at 11:59pm | 100 pts
                      </div>
                    </div>
                  </div>

                  <div className="mt-1">
                    <IndAssignmentControlButtons />
                  </div>
                </div>
              </ListGroup.Item>
            </Link>
          </ListGroup>

          <ListGroup className="wd-lessons rounded-0">
            <Link
              to="/Kambaz/Courses/1234/Assignments/Editor"
              className="text-decoration-none"
            >
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilLight
                      className="me-3 fs-4"
                      style={{ color: "green" }}
                    />
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold me-3" id="wd-assignment-title">
                          A3
                        </div>
                      </div>

                      <div className="text-muted small mt-1">
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <strong>Not available until</strong> May 20 at 12:00am |
                        <br />
                        <strong>Due</strong> May 27 at 11:59pm | 100 pts
                      </div>
                    </div>
                  </div>

                  <div className="mt-1">
                    <IndAssignmentControlButtons />
                  </div>
                </div>
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
