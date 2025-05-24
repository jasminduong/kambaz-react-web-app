import { ListGroup } from "react-bootstrap";
import ModulesControl from "./ModulesControl";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import { v4 as uuidv4 } from "uuid";

/* Modules with all content */
export default function Modules() {
  {
    /* retrieves course ID from the URL */
  }
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);

  // moduleName state variable keeps track of the module name edited in the ModuleEditor dialog
  const [moduleName, setModuleName] = useState("");

  // addModule function creates a new module instance with the moduleName as the name 
  // and appends it to the end of the modules state variable
  const addModule = () => {
    setModules([
      ...modules,
      { _id: uuidv4(), name: moduleName, course: cid, lessons: [] },
    ]);
    setModuleName("");
  };

  return (
    <div>
      {/* setModuleName and addModule functions are passed to the ModulesControls component 
      which are passed to the ModuleEditor dialog */}
      <ModulesControl
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={addModule}
      />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroup.Item className="wd-module p-0 mb-5 fs-6 border-lesson-outline">
              <div className="wd-title p-3 ps-2 bg-gray-fill">
                <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <div>
                      <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                        <LessonControlButtons />
                      </ListGroup.Item>

                      {lesson["sub-lessons"] &&
                        lesson["sub-lessons"].map((subLesson: any) => (
                          <ListGroup.Item className="wd-lesson p-3 ps-5">
                            {subLesson.name}{" "}
                          </ListGroup.Item>
                        ))}
                    </div>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
