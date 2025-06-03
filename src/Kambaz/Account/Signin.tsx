import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({}); // declares state variable credentials to edit the username and password
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // clicking the Sign in button posts the credentials to the server using the client.signin function
  // when the server responds successfully, the currently logged in user is stored in the user reducer and navigate to the Profile screen
  const signin = async () => {
    const user = await client.signin(credentials); // fetches signin credentials from client
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
