import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControl from "./ModulesControl";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { useState } from "react";
import { useParams } from "react-router";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
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

  return (
    <div>
      {/* setModuleName and addModule functions are passed to the ModulesControls component 
      which are passed to the ModuleEditor dialog */}
      <ModulesControl
        setModuleName={setModuleName}
        moduleName={moduleName}
        // wrap reducer functions with dispatch clear module name
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
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
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // wrap reducer functions with dispatch
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                {/* ModuleControlButtons passes in moduleID and deleteModule and editModule function (set editing to true) */}
                {currentUser.role === "FACULTY" && ( <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    // wrap reducer functions with dispatch
                    dispatch(deleteModule(moduleId));
                  }}
                  // wrap reducer functions with dispatch
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                /> )}
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
