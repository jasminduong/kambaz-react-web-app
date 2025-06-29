import Modules from "../Modules";
import CourseStatus from "./Status";

/* Course Home page displaying modules and course status sidebar */
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-3">
        <Modules />
      </div>
      <div className="d-none d-xl-block">
        <CourseStatus />
      </div>
    </div>
  );
}
