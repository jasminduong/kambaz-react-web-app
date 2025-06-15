import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { TiHome } from "react-icons/ti";
import { MdBarChart } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { FiBell } from "react-icons/fi";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="ps-4 pt-5" style={{ width: "255px" }}>
      <h5>Course Status</h5>
      <div className="d-flex gap-2">
        <div className="w-50 ">
          <Button
            variant="secondary"
            size="sm"
            className="w-100 text-nowrap bg-gray-fill"
          >
            <MdDoNotDisturbAlt className="me-2 fs-6" /> Unpublish{" "}
          </Button>{" "}
        </div>
        <div className="w-50">
          <Button variant="success" size="sm" className="w-100">
            <FaCheckCircle className="me-2 fs-6" /> Publish{" "}
          </Button>{" "}
        </div>
      </div>
      <br />
      <Button variant="secondary" size="sm" className="w-100 mt-1 text-start bg-gray-fill">
        <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
      </Button>
      <Button variant="secondary" size="sm" className="w-100 mt-1 text-start bg-gray-fill">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
      </Button>
      <Button variant="secondary" size="sm" className="w-100 mt-1 text-start bg-gray-fill">
        <TiHome className="me-2 fs-5" /> Choose Home Page{" "}
      </Button>
      <Button variant="secondary" size="sm" className="w-100 mt-1 text-start bg-gray-fill">
        <MdBarChart className="me-2 fs-5" /> View Course Screen{" "}
      </Button>
      <Button variant="secondary" size="sm" className="w-100 mt-1 text-start bg-gray-fill">
        <TbSpeakerphone className="me-2 fs-5" />New Annoucement{" "}
      </Button>
      <Button variant="secondary" size="sm" className="w-100 mt-1 text-start bg-gray-fill">
        <MdBarChart className="me-2 fs-5" /> New Analytics{" "}
      </Button>
      <Button variant="secondary" size="sm" className="w-100 mt-1 text-start bg-gray-fill">
        <FiBell className="me-2 fs-5" /> View Course Notifications{" "}
      </Button>
    </div>
  );
}

