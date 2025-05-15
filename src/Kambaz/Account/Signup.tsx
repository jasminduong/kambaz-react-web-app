import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h4 id="wd-signup-title">Signup</h4> <hr />
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
      <Form.Control
        id="wd-verify-password"
        placeholder="Verify password"
        type="password"
        className="mb-2 text-input-field"
      />
      <Link
        id="wd-signup-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Signup{" "}
      </Link>
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
