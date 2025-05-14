import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container className="mt-4" id="wd-assignments-editor">
      <Form style={{ fontSize: "14px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control placeholder="A1" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={`The assignment is available online
Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kambaz application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Points</Form.Label>
          </Col>
          <Col>
            <Form.Control type="number" defaultValue={100} />
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
            <Form.Select defaultValue="Percentage" style={{ fontSize: "14px" }}>
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
                    defaultValue="2024-05-13"
                    className="mb-3"
                  />
                  <Row>
                    <Col>
                      <Form.Label>
                        <strong>Available from</strong>
                      </Form.Label>
                      <Form.Control type="date" defaultValue="2024-05-06" />
                    </Col>
                    <Col>
                      <Form.Label>
                        <strong>Until</strong>
                      </Form.Label>
                      <Form.Control type="date" defaultValue="2024-05-20" />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="d-flex justify-content-end mt-4">
          <Button variant="secondary" size="sm" className="me-2 bg-gray-fill">
            Cancel
          </Button>
          <Button variant="danger" size="sm">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
}
