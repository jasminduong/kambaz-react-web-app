import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;

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

  const formatDate = (dateStr: string): string => {
    const cleanDate = dateStr.split(" at ")[0] + " " + new Date().getFullYear();
    const parsedDate = new Date(cleanDate);

    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <Container className="mt-4" id="wd-assignments-editor">
      {assignmentToEdit && (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control defaultValue={assignmentToEdit.title} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              defaultValue={assignmentToEdit.description}
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={3}>
              <Form.Label>Points</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="number"
                defaultValue={assignmentToEdit.points}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}>
              <Form.Label>Assignment Group</Form.Label>
            </Col>
            <Col>
              <Form.Select
                defaultValue="ASSIGNMENTS"
                style={{ fontSize: "13px" }}
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}>
              <Form.Label>Display Grade as</Form.Label>
            </Col>
            <Col>
              <Form.Select
                defaultValue="Percentage"
                style={{ fontSize: "14px" }}
              >
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
                      defaultValue="Online"
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
                      defaultValue={formatDate(assignmentToEdit.dueDate)}
                      className="mb-3"
                    />
                    <Row>
                      <Col>
                        <Form.Label>
                          <strong>Available from</strong>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          defaultValue={formatDate(
                            assignmentToEdit.availableDate
                          )}
                        />
                      </Col>
                      <Col>
                        <Form.Label>
                          <strong>Until</strong>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          defaultValue={formatDate(assignmentToEdit.dueDate)}
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-4">
            <Link to={`/Kambaz/Courses/${assignmentToEdit.course}/Assignments`}>
              <Button
                variant="secondary"
                size="sm"
                className="me-2 bg-gray-fill"
              >
                Cancel
              </Button>
            </Link>
            <Link to={`/Kambaz/Courses/${assignmentToEdit.course}/Assignments`}>
              <Button variant="danger" size="sm">
                Save
              </Button>
            </Link>
          </div>
        </Form>
      )}
    </Container>
  );
}
