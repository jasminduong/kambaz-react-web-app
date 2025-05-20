import { courses } from "../Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa";

/* Course page layout and route configuration for course tools (home, modules, assignments, assignment editor) */
export default function Courses() {
  {
    /* gets the cid (dynamic URL parameter) from the current URL */
  }
  const { cid } = useParams();
  {
    /* finds the first course object whose _id matches the cid */
  }
  const course = courses.find((course) => course._id === cid);

  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      {/* applies text color red */}
      <h3 className="text-danger course-title">
        {/* applies spacing in front of menu hamburger */}
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {/* renders course.name only if course is defined */}
        {course && course.name}{" "}
        {/* creates bread crumb by splitting URL path into parts */}
        <span style={{ color: "black" }}>
          <span style={{ fontSize: "14px" }}>{">"}</span>{" "}
          {pathname.split("/")[4]}
        </span>
      </h3>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/Editor/:aid" element={<AssignmentEditor />} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
