import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiNotePencilLight } from "react-icons/pi";

/* Dashboard with 7 courses linked to a course */
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h3 id="wd-dashboard-title">Dashboard</h3> <hr />
      <h6 id="wd-dashboard-published">Published Courses (7)</h6> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Row xs={1} md={2} lg={4} className="g-30" id="wd-courses-row">
            <Col className="wd-dashboard-course">
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card id="wd-course-card">
                  <Card.Img
                    variant="top"
                    src="/images/reactjs.png"
                    id="wd-course-img"
                  />
                  <Card.Body className="p-1" id="wd-course-card-body">
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ color: "#0A64A9" }}
                    >
                      {" "}
                      CS1234 React JS
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-text text-nowrap overflow-hidden">
                      Full-Stack Software Development{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <PiNotePencilLight className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="wd-dashboard-course">
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card id="wd-course-card">
                  <Card.Img
                    variant="top"
                    src="/images/engineeringDesign.png"
                    id="wd-course-img"
                  />
                  <Card.Body className="p-1" id="wd-course-card-body">
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ color: "#763A98" }}
                    >
                      {" "}
                      GE1110 Engineering Design
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-text overflow-hidden">
                      Engineering Design Process{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <PiNotePencilLight className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="wd-dashboard-course">
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card id="wd-course-card">
                  <Card.Img
                    variant="top"
                    src="/images/experienceDesign.png"
                    id="wd-course-img"
                  />
                  <Card.Body className="p-1" id="wd-course-card-body">
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ color: "#1D6B7F" }}
                    >
                      {" "}
                      ARTG3462 Experience Desig...
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-text overflow-hidden">
                      Designing for User Experiences{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <PiNotePencilLight className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="wd-dashboard-course">
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card id="wd-course-card">
                  <Card.Img
                    variant="top"
                    src="/images/techHumanValues.png"
                    id="wd-course-img"
                  />
                  <Card.Body className="p-1" id="wd-course-card-body">
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ color: "#763A98" }}
                    >
                      {" "}
                      PHIL1145 Technology and H...
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-text overflow-hidden">
                      Ethics of Robots and AI{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <PiNotePencilLight className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="wd-dashboard-course">
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card id="wd-course-card">
                  <Card.Img
                    variant="top"
                    src="/images/psychology.png"
                    id="wd-course-img"
                  />
                  <Card.Body className="p-1" id="wd-course-card-body">
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ color: "#AC3017" }}
                    >
                      {" "}
                      PSYC1101 Foundations of P...
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-text overflow-hidden">
                      Foundations of Psychology{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <PiNotePencilLight className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="wd-dashboard-course">
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card id="wd-course-card">
                  <Card.Img
                    variant="top"
                    src="/images/co-op.png"
                    id="wd-course-img"
                  />
                  <Card.Body className="p-1" id="wd-course-card-body">
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ color: "#1D6B7F" }}
                    >
                      {" "}
                      EEAM2000 Professional Dev...
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-text overflow-hidden">
                      Professional Development{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <PiNotePencilLight className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="wd-dashboard-course">
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card id="wd-course-card">
                  <Card.Img
                    variant="top"
                    src="/images/typography.png"
                    id="wd-course-img"
                  />
                  <Card.Body className="p-1" id="wd-course-card-body">
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ color: "#763A98" }}
                    >
                      {" "}
                      ARTG1290 Typographic Syst...
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-text overflow-hidden">
                      Anatomy and History of Typefaces{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <PiNotePencilLight className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
