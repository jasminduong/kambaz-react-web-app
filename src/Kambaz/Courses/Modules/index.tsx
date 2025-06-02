import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControl from "./ModulesControl";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
  setModules,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

/* Modules with all content */
export default function Modules() {
  {
    /* retrieves course ID from the URL */
  }
  const { cid } = useParams();

  // moduleName state variable keeps track of the module name edited in the ModuleEditor dialog
  const [moduleName, setModuleName] = useState("");

  // retrieve modules state variables from reducer
  // get dispatch to call reducer functions
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string); // fetches modules from client
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule); // fetches new module from client
    dispatch(addModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId); // fetches module to be removed from client
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module); // fetches udated module from client 
    dispatch(updateModule(module));
  };

  return (
    <div>
      {/* setModuleName and addModule functions are passed to the ModulesControls component 
      which are passed to the ModuleEditor dialog */}
      <ModulesControl
        setModuleName={setModuleName}
        moduleName={moduleName}
        // wrap reducer functions with dispatch clear module name
        addModule={createModuleForCourse}
      />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: any) => (
          <ListGroup.Item className="wd-module p-0 mb-5 fs-6 border-lesson-outline">
            <div className="wd-title p-3 ps-2 bg-gray-fill">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}{" "}
              {/* shows the module name if not editing */}
              {/* shows the input field if editing
                when typing edit the module's name
                if "Enter" key is pressed then set editing field to false to hide the text field */}
              {currentUser.role === "FACULTY" && module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) =>
                    // wrap reducer functions with dispatch
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              {/* ModuleControlButtons passes in moduleID and deleteModule and editModule function (set editing to true) */}
              {currentUser.role === "FACULTY" && (
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  // wrap reducer functions with dispatch
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              )}
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
