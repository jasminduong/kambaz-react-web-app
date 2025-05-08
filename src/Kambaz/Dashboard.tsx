import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ textAlign: "left" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/engineeringDesign.png" width={200} />
            <div className="wd-dashboard-course">
              <h5> GE 1100 Engineering Design </h5>
              <p className="wd-dashboard-course-title">Engineering Design </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/experienceDesign.png" width={200} />
            <div className="wd-dashboard-course">
              <h5> ARTG 3456 Experience Design </h5>
              <p className="wd-dashboard-course-title">Experience Design </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/techHumanValues.png" width={200} />
            <div className="wd-dashboard-course">
              <h5> PHIL 1145 Technology and Human Values </h5>
              <p className="wd-dashboard-course-title">
                Technology and Human Values{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/psychology.png" width={200} />
            <div className="wd-dashboard-course">
              <h5> PSYCH 1101 Foundations of Psychology </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Psychology{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/co-op.png" width={200} />
            <div className="wd-dashboard-course">
              <h5> EEAM 2000 Professional Development </h5>
              <p className="wd-dashboard-course-title">
                Professional Development{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br></br>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/typography.png" width={200} />
            <div className="wd-dashboard-course">
              <h5> ARTG 1290 Typographic Systems </h5>
              <p className="wd-dashboard-course-title">Typographic Systems </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
