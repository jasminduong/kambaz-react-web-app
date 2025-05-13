import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

/* Course sidebar navigation with links to sections (home, modules, piazza, zoom, assignments, quizzes, people) */
export default function CourseNavigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-6 rounded-0 me-4">
      <ListGroup.Item
        to="/Kambaz/Courses/1234/Home"
        as={Link}
        id="wd-course-home-link"
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Courses/1234/Home") ? "active text-black" : "text-danger"
        }`}
      >
        Home{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Courses/1234/Modules"
        as={Link}
        id="wd-course-modules-link"
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Courses/1234/Modules") ? "active text-black" : "text-danger"
        }`}
      >
        Modules{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Courses/1234/Piazza"
        as={Link}
        id="wd-course-piazza-link"
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Courses/1234/Piazza") ? "active text-black" : "text-danger"
        }`}
      >
        Piazza{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Courses/1234/Zoom"
        as={Link}
        id="wd-course-zoom-link"
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Courses/1234/Zoom") ? "active text-black" : "text-danger"
        }`}
      >
        Zoom{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Courses/1234/Assignments"
        as={Link}
        id="wd-course-quizzes-link"
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Courses/1234/Assignments") ? "active text-black" : "text-danger"
        }`}
      >
        Assignments{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Courses/1234/Quizzes"
        as={Link}
        id="wd-course-assignments-link"
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Courses/1234/Quizzes") ? "active text-black" : "text-danger"
        }`}
      >
        Quizzes{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Courses/:cid/People"
        as={Link}
        id="wd-course-people-link"
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Courses/:cid/People") ? "active text-black" : "text-danger"
        }`}
      >
        People{" "}
      </ListGroup.Item>
    </div>
  );
}
