import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

export default function TOC() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Nav variant="pills" style={{ paddingBottom: "20px" }}>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/Labs/Lab1"
          active={currentPath === "/Labs/Lab1"}
        >
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/Labs/Lab2"
          active={currentPath === "/Labs/Lab2"}
        >
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/Labs/Lab3"
          active={currentPath === "/Labs/Lab3"}
        >
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Kambaz" active={currentPath === "/Kambaz"}>
          Kambaz
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://github.com/jasminduong"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
