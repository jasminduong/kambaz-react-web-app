import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiNotePencilLight } from "react-icons/pi";
import * as db from "./Database";

/* Dashboard with 7 courses linked to a course */
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h3 id="wd-dashboard-title">Dashboard</h3> <hr />
      <h6 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h6>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Row xs={1} md={2} lg={4} className="g-30" id="wd-courses-row">
            {courses.map((course) => (
              <Col className="wd-dashboard-course">
                <Card id="wd-course-card">
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    {/* dynamically renders course image from database */}
                    <Card.Img
                      variant="top"
                      src={course.image}
                      id="wd-course-img"
                    />
                    <Card.Body className="p-1" id="wd-course-card-body">
                      <Card.Title
                        className="wd-dashboard-course-title text-nowrap overflow-hidden"
                        style={{ color: course.color }}
                      >
                        {" "}
                        {course.name}
                      </Card.Title>
                      <Card.Text className="wd-dashboard-course-text text-nowrap overflow-hidden">
                        {course.description}{" "}
                      </Card.Text>
                      <div className="text-start">
                        <Link to={`/Kambaz/Courses/${course._id}/Assignments`}>
                          <PiNotePencilLight className="fs-3 text-dark" />
                        </Link>
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
