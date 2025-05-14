import { ListGroup } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <ListGroup
      id="wd-account-navigation"
      style={{ width: 120 }}
      className="wd list-group fs-6 rounded-0 me-4"
    >
      <ListGroup.Item
        to="/Kambaz/Account/Signin"
        as={Link}
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Account/Signin")
            ? "active text-black"
            : "text-danger"
        }`}
      >
        Signin{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Account/Signup"
        as={Link}
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Account/Signup")
            ? "active text-black"
            : "text-danger"
        }`}
      >
        Signup{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Account/Profile"
        as={Link}
        className={`list-group-item border-0 ${
          isActive("/Kambaz/Account/Profile")
            ? "active text-black"
            : "text-danger"
        }`}
      >
        Profile{" "}
      </ListGroup.Item>
    </ListGroup>
  );
}
