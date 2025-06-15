import { FormControl } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // clicking the Sign up button posts the user to the server using the client.signup function
  // when the server responds successfully, the new created user is stored in the user reducer and navigate to the Profile screen
  const signup = async () => {
    const currentUser = await client.signup(user); // fetches user from client 
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };

  return (
    <div id="wd-signup-screen">
      <h4 id="wd-signup-title">Signup</h4> <hr />
      <FormControl
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username text-input-field b-2"
        placeholder="username"
      />
      <FormControl
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2"
        placeholder="password"
        type="password"
      />
      <button
        onClick={signup}
        className="btn btn-primary w-100"
        id="wd-signup-btn"
      >
        {" "}
        Sign up{" "}
      </button>
      <br />
      <Link
        id="wd-signin-link"
        to="/Kambaz/Account/Signin"
        className="btn w-100 mb-2"
      >
        Signin
      </Link>
    </div>
  );
}
