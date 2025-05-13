import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControl";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

/* Modules with all content */
export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <ListGroup className="rounded-0 me-1" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-6 border-lesson-outline">
          <div className="wd-title p-3 ps-2 bg-gray-fill">
            <BsGripVertical className="me-2 fs-3" /> Week 1{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Introduction to the course{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Learn what is Web Development{" "}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> READING{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Full Stack Developer - Chapter 0 - Introduction{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Full Stack Developer - Chapter 1 - Creating User Interfaces{" "}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Introduction to Web Development{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Creating an HTTP server with Node.js{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Creating a React Application{" "}
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item className="wd-module p-0 mb-5 fs-6 border-lesson-outline">
          <div className="wd-title p-3 ps-2 bg-gray-fill">
            <BsGripVertical className="me-2 fs-3" /> Week 2{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Learn how to create user interfaces with HTML
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Deploy the assignment to Netlify
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> READING{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Full Stack Developer - Chapter 1 - Creating User Interfaces{" "}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Formatting Web content with Headings and Paragraphs
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Formatting content with Lists and Tables
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Creating Web Forms
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Navigating with Anchors
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item className="wd-module p-0 mb-5 fs-6 border-lesson-outline">
          <div className="wd-title p-3 ps-2 bg-gray-fill">
            <BsGripVertical className="me-2 fs-3" /> Week 3{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Learn how to style with CSS
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Styling with React Bootstrap CSS Library
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> READING{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Full Stack Developer - Chapter 2 - Styling Web Pages with CSS{" "}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Introduction to Cascading Style Sheets
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Styling with Colors
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              The Box Model
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Size and Position
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">
              Float
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-5">Flex</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
