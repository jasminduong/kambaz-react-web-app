import { ListGroup } from "react-bootstrap";
import AssignmentsControl from "./AssignmentsControl";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { PiNotePencilLight } from "react-icons/pi";
import IndAssignmentControlButtons from "./IndAssignmentControlButtons";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  {
    /* retrieves course ID from the URL */
  }
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state: any) => state.assignmentReducer.assignments
  );

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    ); // fetches assignments from client
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    console.log("Attempting to delete:", assignmentId);
    await assignmentsClient.deleteAssignment(assignmentId); // fetches assignment to be removed from client
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div id="wd-assignments">
      {currentUser.role === "FACULTY" && <AssignmentsControl />}
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-6 border-lesson-outline">
          <div className="wd-title p-3 ps-2 bg-gray-fill">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS{" "}
            {currentUser.role === "FACULTY" && <AssignmentControlButtons />}
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <div className="d-flex align-items-start justify-content-between">
                    <div className="d-flex">
                      <BsGripVertical className="me-2 fs-3" />
                      {currentUser.role === "FACULTY" && (
                        <Link
                          to={`/Kambaz/Courses/${assignment.course}/Assignments/Editor/${assignment._id}`}
                          className="text-decoration-none"
                        >
                          <PiNotePencilLight
                            className="me-3 fs-4"
                            style={{ color: "green" }}
                          />{" "}
                        </Link>
                      )}
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div
                            className="fw-semibold me-3"
                            id="wd-assignment-title"
                          >
                            {assignment.title}
                          </div>
                        </div>

                        <div className="text-muted small mt-1">
                          <strong>Not available until</strong>{" "}
                          {assignment.availableDate} | <strong>Due</strong>{" "}
                          {assignment.dueDate} | {assignment.points}pts
                        </div>
                      </div>
                    </div>

                    {currentUser.role === "FACULTY" && (
                      <div className="mt-1">
                        <IndAssignmentControlButtons
                          assignmentId={assignment._id}
                          deleteAssignment={(assignmentId) =>
                            removeAssignment(assignmentId)
                          }
                        />
                      </div>
                    )}
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
