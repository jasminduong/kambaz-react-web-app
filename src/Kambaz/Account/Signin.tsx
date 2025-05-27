import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // signin function that searches for a user with the credentials
  // if there's a user that matches, store it in the reducer by dispatching it to the Account reducer using the setCurrentUser reducer function
  // ignore the Sign In attempt if there's no match
  // after signing in, navigate to the Dashboard
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h4 id="wd-signin-title">Signin</h4> <hr />
      <Form.Control
        id="wd-username"
        className="text-input-field"
        placeholder="username"
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <Form.Control
        id="wd-password"
        className="text-input-field"
        placeholder="password"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100">
        {" "}
        Sign in{" "}
      </Button>
      <Link
        id="wd-signup-link"
        to="/Kambaz/Account/Signup"
        className="btn w-100 mb-2"
      >
        Sign up
      </Link>
    </div>
  );
}
