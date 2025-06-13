import { useState, useEffect } from "react";
import { Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiNotePencilLight } from "react-icons/pi";
import { LiaBookSolid } from "react-icons/lia";
import { FiTrash } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addCourse,
  deleteCourse,
  updateCourse,
  setCourse,
  setCourses,
} from "./Courses/reducer";
import { enrollUser, unenrollUser } from "./Enrollments/reducer";
import * as coursesClient from "./Courses/client";
import * as enrollmentsClient from "./Enrollments/client";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  image: string;
  color: string;
}

const courseTemplate = {
  _id: uuidv4(),
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  image: "/images/reactjs.png",
  color: "#0A64A9",
  description: "New Description",
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { course, courses } = useSelector((state: any) => state.courseReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentsReducer.enrollments
  );

  const fetchCourses = async () => {
    const allCourses = await coursesClient.fetchAllCourses();
    dispatch(setCourses(allCourses));
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAddCourse = async () => {
    if (!currentUser) {
      alert("You are not logged in! Please log in first.");
      return;
    }

    if (currentUser.role !== "FACULTY") {
      alert(
        `You are logged in as ${currentUser.role}, but need to be FACULTY to create courses.`
      );
      return;
    }
    const newCourse: Course = {
      _id: uuidv4(),
      name: course.name || "New Course",
      number: course.number || "New Number",
      startDate: course.startDate || "2023-09-10",
      endDate: course.endDate || "2023-12-15",
      department: course.department || "Computer Science",
      credits: course.credits || 4,
      description: course.description || "New Description",
      image: "/images/reactjs.png",
      color: "#0A64A9",
    };
    const createdCourse = await coursesClient.createCourse(newCourse);

    dispatch(addCourse(createdCourse));

    dispatch(
      enrollUser({
        _id: uuidv4(),
        user: currentUser._id,
        course: createdCourse._id,
      })
    );

    dispatch(setCourse(courseTemplate));
    setIsEditing(false);
  };

  const handleUpdateCourse = async () => {
    const updatedCourse = await coursesClient.updateCourse(course);
    dispatch(updateCourse(updatedCourse));
    setIsEditing(false);
  };

  const handleDeleteCourse = async (courseId: string) => {
    const deletedCourse = await coursesClient.deleteCourse(courseId);
    dispatch(deleteCourse(deletedCourse));
    dispatch(
      unenrollUser({
        user: currentUser._id,
        course: courseId,
      })
    );
  };

  const [showAllCourses, setShowAllCourses] = useState(false);

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course: Course) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      );

  const fetchEnrollments = async () => {
    if (currentUser?._id) {
      try {
        const response = await enrollmentsClient.findEnrollmentsByUser(
          currentUser._id
        );

        const enrollments = response.data || response || [];

        if (Array.isArray(enrollments)) {
          enrollments.forEach((e: any) => dispatch(enrollUser(e)));
        } else {
          console.warn("Enrollments response is not an array:", enrollments);
        }
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    }
  };
  useEffect(() => {
    fetchEnrollments();
  }, []);

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h3 id="wd-dashboard-title">Dashboard</h3>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Only" : "Show All Courses"}
        </button>
      </div>
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className={`btn btn-sm float-end me-2 ${
                isEditing ? "bg-gray-fill" : "btn-danger"
              }`}
              id="wd-add-new-course-click"
              onClick={handleAddCourse}
            >
              Add
            </button>
            <button
              className={`btn btn-sm float-end me-2 ${
                isEditing ? "btn-danger" : "bg-gray-fill"
              }`}
              onClick={handleUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) =>
              dispatch(setCourse({ ...course, name: e.target.value }))
            }
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) =>
              dispatch(setCourse({ ...course, description: e.target.value }))
            }
          />
          <hr />
        </>
      )}

      <h6 id="wd-dashboard-published">
        {showAllCourses
          ? `Published Courses (${courses.length})`
          : `Enrolled Courses (${filteredCourses.length})`}
      </h6>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={2} lg={4} className="g-30" id="wd-courses-row">
          {filteredCourses.map((course: Course) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            );

            return (
              <Col key={course._id} className="wd-dashboard-course">
                <Card id="wd-course-card">
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    onClick={() => {
                      console.log("=== COURSE CARD CLICKED ===");
                      console.log("Course ID:", course._id);
                      console.log("Course data:", course);
                      console.log(
                        "Navigating to:",
                        `/Kambaz/Courses/${course._id}/Home`
                      );
                    }}
                  >
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
                        {course.name}
                      </Card.Title>
                      <Card.Text className="wd-dashboard-course-text text-nowrap overflow-hidden">
                        {course.description}
                      </Card.Text>
                      <div className="text-start d-flex align-items-baseline justify-content-between">
                        <div>
                          <Link
                            to={`/Kambaz/Courses/${course._id}/Home`}
                            className="me-2"
                          >
                            <LiaBookSolid
                              color="#0A64A9"
                              className="fs-3 text-dark"
                            />
                          </Link>
                          <button
                            className={`btn btn-sm ${
                              isEnrolled ? "btn-danger" : "btn-success"
                            }`}
                            onClick={async (e) => {
                              e.preventDefault();
                              if (isEnrolled) {
                                await enrollmentsClient.unenrollUser(
                                  currentUser._id,
                                  course._id
                                );
                                dispatch(
                                  unenrollUser({
                                    user: currentUser._id,
                                    course: course._id,
                                  })
                                );
                              } else {
                                await enrollmentsClient.enrollUser(
                                  currentUser._id,
                                  course._id
                                );
                                dispatch(
                                  enrollUser({
                                    _id: uuidv4(), // This is only needed for Redux tracking
                                    user: currentUser._id,
                                    course: course._id,
                                  })
                                );
                              }
                            }}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </button>
                        </div>
                        {currentUser.role === "FACULTY" && (
                          <div>
                            <button
                              id="wd-edit-course-click"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(setCourse(course));
                                setIsEditing(true);
                              }}
                              className="btn me-2 p-0"
                              aria-label="Edit Course"
                              style={{ background: "none", border: "none" }}
                            >
                              <PiNotePencilLight size={24} color="green" />
                            </button>

                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                handleDeleteCourse(course._id);
                              }}
                              className="btn me-2 p-0"
                              id="wd-delete-course-click"
                              aria-label="Delete Course"
                              style={{ background: "none", border: "none" }}
                            >
                              <FiTrash size={20} color="#C61717" />
                            </button>
                          </div>
                        )}
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
