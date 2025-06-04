import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addAssignment } from "../Assignments/reducer";
import { updateAssignment } from "../Assignments/reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state: any) => state.assignmentReducer.assignments
  );

  type Assignment = {
    _id: string;
    title: string;
    course: string;
    module: string;
    availableDate: string;
    dueDate: string;
    points: number;
    description: string;
  };

  const assignmentToEdit = assignments.find(
    (assignment: Assignment) =>
      assignment.course === cid && assignment._id === aid
  );

  const formatDate = (dateStr?: string): string => {
    if (!dateStr) return new Date().toISOString().slice(0, 10);
    const parsedDate = new Date(dateStr);
    if (isNaN(parsedDate.getTime())) {
      return new Date().toISOString().slice(0, 10);
    }
    return parsedDate.toISOString().slice(0, 10);
  };

  // state variables to set assignment fields
  const [title, setTitle] = useState(
    assignmentToEdit?.title || "New Assignment"
  );
  const [description, setDescription] = useState(
    assignmentToEdit?.description || "New Assignment Description"
  );
  const [points, setPoints] = useState(assignmentToEdit?.points || 100);
  const [availableDate, setAvailableDate] = useState(
    formatDate(assignmentToEdit?.availableDate || new Date().toISOString())
  );
  const [dueDate, setDueDate] = useState(
    formatDate(assignmentToEdit?.dueDate || new Date().toISOString())
  );

  const isNew = !assignmentToEdit;

  // handleSave event handler that calls reducer function newAssignment
  const handleSave = async () => {
    if (isNew) {
      const newAssignment = await coursesClient.createAssignmentForCourse(
        cid!,
        {
          title,
          description,
          course: cid!,
          module: "ASSIGNMENTS",
          points,
          availableDate,
          dueDate,
        }
      );
      dispatch(addAssignment(newAssignment));
    } else {
      const updatedAssignment = await assignmentsClient.updateAssignment({
        _id: aid,
        title,
        description,
        course: cid!,
        module: "ASSIGNMENTS",
        points,
        availableDate,
        dueDate,
      });
      dispatch(updateAssignment(updatedAssignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Container className="mt-4" id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Points</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Assignment Group</Form.Label>
          </Col>
          <Col>
            <Form.Select value="ASSIGNMENTS" style={{ fontSize: "13px" }}>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Display Grade as</Form.Label>
          </Col>
          <Col>
            <Form.Select value="Percentage" style={{ fontSize: "14px" }}>
              <option value="Percentage">Percentage</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Submission Type</Form.Label>
          </Col>
          <Col>
            <Row className="mb-3">
              <Col md={{ span: 12 }}>
                <div className="border p-3 rounded">
                  <Form.Select
                    value="Online"
                    className="mb-3"
                    style={{ fontSize: "14px" }}
                  >
                    <option value="Online">Online</option>
                  </Form.Select>

                  <Form.Label>
                    <strong>Online Entry Options</strong>
                  </Form.Label>
                  <Form.Check label="Text Entry" />
                  <Form.Check label="Website URL" />
                  <Form.Check label="Media Recordings" />
                  <Form.Check label="Student Annotation" />
                  <Form.Check label="File Uploads" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col>
            <Row className="mb-3">
              <Col md={{ span: 12 }}>
                <div className="border p-3 rounded">
                  <Form.Label>
                    <strong>Assign to</strong>
                  </Form.Label>
                  <Form.Control defaultValue="Everyone" className="mb-3" />
                  <Form.Label>
                    <strong>Due</strong>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    defaultValue={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="mb-3"
                  />
                  <Row>
                    <Col>
                      <Form.Label>
                        <strong>Available from</strong>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        defaultValue={availableDate}
                        onChange={(e) => setAvailableDate(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Label>
                        <strong>Until</strong>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        defaultValue={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="d-flex justify-content-end mt-4">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" size="sm" className="me-2 bg-gray-fill">
              Cancel
            </Button>
          </Link>
          <Button variant="danger" size="sm" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
}
