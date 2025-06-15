import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FormControl } from "react-bootstrap";

export default function PeopleDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const [name, setName] = useState(""); // to edit the user's first and last name
  const [editing, setEditing] = useState(false); // whether we are editing or not

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };

  const saveUser = async () => {
    // to save updates to user's name
    const [firstName, lastName] = name.split(" "); // split the name into an array and get first and last
    const updatedUser = { ...user, firstName, lastName }; // and create new version of user overriding first and last
    await client.updateUser(updatedUser); // send update to server
    setUser(updatedUser); // update local copy of the user
    setEditing(false); // finish editing
    navigate(-1); // go back to PeopleTable
  };

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={() => navigate(-1)}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />{" "}
      </button>
      <div className="text-center mt-2">
        {" "}
        <FaUserCircle className="text-secondary me-2 fs-1" />{" "}
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editing && ( // if not editing show pencil icon
          <FaPencil
            onClick={() => setEditing(true)} // clicking pencil turns on editing and hides pencil
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && ( // if editing show check mark 
          <FaCheck
            onClick={() => saveUser()} // clicking check turns off editing, saves and hides check
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!editing && ( // if not editing, show first and last name
          <div className="wd-name" onClick={() => setEditing(true)} > 
            {user.firstName} {user.lastName} 
          </div> // clicking on name turns on editing 
        )}
        {user && editing && ( // if editing show input field to edit name
          <FormControl
            className="w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`} // name is initially concatenation of first and last
            onChange={(e) => setName(e.target.value)} // update name as typing 
            onKeyDown={(e) => {
              if (e.key === "Enter") { // save user if Enter key is pressed
                saveUser();
              }
            }}
          />
        )}
      </div>
      <b>Roles:</b> <span className="wd-roles"> {user.role} </span> <br />
      <b>Login ID:</b> <span className="wd-login-id"> {user.loginId} </span>{" "}
      <br />
      <b>Section:</b> <span className="wd-section"> {user.section} </span>{" "}
      <br />
      <b>Total Activity:</b>{" "}
      <span className="wd-total-activity">{user.totalActivity}</span> <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete"
      >
        {" "}
        Delete{" "}
      </button>
      <button
        onClick={() => navigate(-1)}
        className="btn bg-gray-fill float-start float-end me-2 wd-cancel"
      >
        {" "}
        Cancel{" "}
      </button>
    </div>
  );
}
