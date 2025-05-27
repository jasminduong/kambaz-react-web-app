import { ListGroup } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // if currentUser is not empty, display "profile"
  // otherwise display "signin" and "signup"
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <ListGroup
      id="wd-account-navigation"
      style={{ width: 120 }}
      className="wd list-group fs-6 rounded-0 me-4"
    >
      {links.map((link) => (
        <ListGroup.Item
          key={link}
          to={`/Kambaz/Account/${link}`}
          as={Link}
          className={`list-group-item border-0 ${
            isActive(`/Kambaz/Account/${link}`)
              ? "active text-black"
              : "text-danger"
          }`}
        >
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
