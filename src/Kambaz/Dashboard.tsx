import { useState } from "react";
import { Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiNotePencilLight } from "react-icons/pi";
import { LiaBookSolid } from "react-icons/lia";
import { FiTrash } from "react-icons/fi";

/* Dashboard with 7 courses linked to a course */
export default function Dashboard({
  // moved the state variables and event handler functions to Kambaz and then accepted them as parameters
  // defines the inputs this Dashboard component expects and enforce their types
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div id="wd-dashboard">
      <h3 id="wd-dashboard-title">Dashboard</h3> <hr />
      {/* button to invoke addNewCourse */}
      <h5>
        New Course
        <button
          className={`btn btn-sm float-end me-2 ${
            isEditing ? "bg-gray-fill" : "btn-danger"
          }`}
          id="wd-add-new-course-click"
          onClick={() => {
            addNewCourse();
            setIsEditing(false);
          }}
        >
          {" "}
          Add{" "}
        </button>
        <button
          className={`btn btn-sm float-end me-2 ${
            isEditing ? "btn-danger" : "bg-gray-fill"
          }`}
          onClick={() => {
            updateCourse();
            setIsEditing(false);
          }}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      {/* input element for each of fields in course state variable (course name and course description) */}
      {/* onChange calls mutator function to update fields */}
      {/* e.target.value gets the new value the user just typed in the input field */}
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr></hr>
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
                      <div className="text-start d-flex align-items-baseline justify-content-between">
                        <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                          <LiaBookSolid
                            color="#0A64A9"
                            className="fs-3 text-dark"
                          />
                        </Link>
                        <div>
                          {/* Edit button copies the course to be edited into the form to edit the course
                          Prevents default to navigate to Course screen */}
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                              setIsEditing(true);
                            }}
                            className="btn me-2 p-0"
                            aria-label="Edit Course"
                            style={{ background: "none", border: "none" }}
                          >
                            <PiNotePencilLight size={24} color="green" />
                          </button>

                          {/* Delete button invokes deleteCourse when clicked, passing the course's ID 
                          and preventing the Link's default behavior to navigate to Course Screen */}
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn me-2 p-0"
                            id="wd-delete-course-click"
                            aria-label="Delete Course"
                            style={{ background: "none", border: "none" }}
                          >
                            <FiTrash size={20} color="#C61717" />
                          </button>
                        </div>
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
