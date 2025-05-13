import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineAssignment } from "react-icons/md";

/* Dashboard with 7 courses linked to a course */
export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ textAlign: "left" }}>
      <h3 id="wd-dashboard-title">Dashboard</h3> <hr />
      <h6 id="wd-dashboard-published">Published Courses (7)</h6> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col
              className="wd-dashboard-course"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card style={{ width: "250px", height: "270px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/reactjs.png"
                    style={{ width: "100%", height: "120px" }}
                  />
                  <Card.Body className="p-1" style={{ marginTop: 10 }}>
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ fontSize: 14, color: "#0A64A9" }}
                    >
                      {" "}
                      CS1234 React JS
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{
                        minHeight: "35px",
                        marginBottom: "0",
                        fontSize: 10,
                      }}
                    >
                      Full-Stack Software Development{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <MdOutlineAssignment className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col
              className="wd-dashboard-course"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card style={{ width: "250px", height: "270px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/engineeringDesign.png"
                    style={{ width: "100%", height: "120px" }}
                  />
                  <Card.Body className="p-1" style={{ marginTop: 10 }}>
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ fontSize: 14, color: "#763A98" }}
                    >
                      {" "}
                      GE1110 Engineering D...
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title overflow-hidden"
                      style={{
                        minHeight: "35px",
                        marginBottom: "0",
                        fontSize: 10,
                      }}
                    >
                      Engineering Design Process{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <MdOutlineAssignment className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col
              className="wd-dashboard-course"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card style={{ width: "250px", height: "270px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/experienceDesign.png"
                    style={{ width: "100%", height: "120px" }}
                  />
                  <Card.Body className="p-1" style={{ marginTop: 10 }}>
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ fontSize: 14, color: "#1D6B7F" }}
                    >
                      {" "}
                      ARTG3462 Experience...
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title overflow-hidden"
                      style={{
                        minHeight: "35px",
                        marginBottom: "0",
                        fontSize: 10,
                      }}
                    >
                      Designing for User Experiences{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <MdOutlineAssignment className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col
              className="wd-dashboard-course"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card style={{ width: "250px", height: "270px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/techHumanValues.png"
                    style={{ width: "100%", height: "120px" }}
                  />
                  <Card.Body className="p-1" style={{ marginTop: 10 }}>
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ fontSize: 14, color: "#763A98" }}
                    >
                      {" "}
                      PHIL1145 Technology a...
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title overflow-hidden"
                      style={{
                        minHeight: "35px",
                        marginBottom: "0",
                        fontSize: 10,
                      }}
                    >
                      Ethics of Robots and AI{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <MdOutlineAssignment className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col
              className="wd-dashboard-course"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card style={{ width: "250px", height: "270px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/psychology.png"
                    style={{ width: "100%", height: "120px" }}
                  />
                  <Card.Body className="p-1" style={{ marginTop: 10 }}>
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ fontSize: 14, color: "#AC3017" }}
                    >
                      {" "}
                      PSYC1101 Foundation...
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title overflow-hidden"
                      style={{
                        minHeight: "35px",
                        marginBottom: "0",
                        fontSize: 10,
                      }}
                    >
                      Foundations of Psychology{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <MdOutlineAssignment className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col
              className="wd-dashboard-course"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card style={{ width: "250px", height: "270px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/co-op.png"
                    style={{ width: "100%", height: "120px" }}
                  />
                  <Card.Body className="p-1" style={{ marginTop: 10 }}>
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ fontSize: 14, color: "#1D6B7F" }}
                    >
                      {" "}
                      EEAM2000 Profession...
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title overflow-hidden"
                      style={{
                        minHeight: "35px",
                        marginBottom: "0",
                        fontSize: 10,
                      }}
                    >
                      Professional Development{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <MdOutlineAssignment className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col
              className="wd-dashboard-course"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card style={{ width: "250px", height: "270px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/typography.png"
                    style={{ width: "100%", height: "120px" }}
                  />
                  <Card.Body className="p-1" style={{ marginTop: 10 }}>
                    <Card.Title
                      className="wd-dashboard-course-title text-nowrap overflow-hidden"
                      style={{ fontSize: 14, color: "#763A98" }}
                    >
                      {" "}
                      ARTG1290 Typographi...
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-title overflow-hidden"
                      style={{
                        minHeight: "35px",
                        marginBottom: "0",
                        fontSize: 10,
                      }}
                    >
                      Anatomy and History of Typefaces{" "}
                    </Card.Text>
                    <ListGroup.Item
                      to="/Kambaz/Courses/1234/Assignments"
                      as={Link}
                      className="text-start border-0 text-black"
                    >
                      <MdOutlineAssignment className={`fs-3 "text-white"}`} />
                    </ListGroup.Item>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <br></br>
        </div>
      </div>
    </div>
  );
}
