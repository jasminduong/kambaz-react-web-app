import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h4 id="wd-signin-title">Signin</h4> <hr />
      <Form.Control
        id="wd-username"
        placeholder="Username"
        className="mb-2 text-input-field"
      />
      <Form.Control
        id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2 text-input-field"
      />
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in{" "}
      </Link>
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
