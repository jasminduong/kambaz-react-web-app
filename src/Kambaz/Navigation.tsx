import { useLocation, Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { MdAccountCircle } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiGitlab } from "react-icons/fi";

import { ListGroup } from "react-bootstrap";

/* Kambaz Sidebar navigation with links to main sections (northeastern, account, dashboard, calendar, inbox) */
export default function KambazNavigation() {
  const location = useLocation();

  const isActive = (pathPrefix: string) =>
    location.pathname.startsWith(pathPrefix);

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed
       bottom-0 top-0 d-none d-md-block bg-black"
    >
      {/* 
      position-fixed - applies [display: fixed] so that the sidebar stays fixed and doesn't scroll with the rest of the screen
      bottom-0 top-0 - applies [bottom: 0] and [top: 0] so that the top edge is fixed at the top of the screen and the bottom edge is fixed at the bottom of the screen
      d-none d-md-block - applies [display: none] so that the element is initially hidden; and then applies [display: block] to display the element when the screen width reaches mid sized screens
      z-2 - applies [z-index: 2] which brings the element above other elements with a lower z-index
      bg-black - applies [background-color: black] 
      */}

      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Account"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Kambaz/Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <MdAccountCircle
          className={`fs-1 ${
            isActive("/Kambaz/Account") ? "text-black" : "text-white"
          }`}
        />
        Account{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Kambaz/Dashboard")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Courses/1234/Home"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Kambaz/Courses")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        Courses{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Calendar"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Kambaz/Calendar")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        Calendar{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Inbox"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Kambaz/Inbox")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <IoMailOpenOutline className="fs-1 text-danger" />
          <span>Inbox</span>
        </div>
      </ListGroup.Item>
      <br></br>
      <br></br>

      <ListGroup.Item
        to="/Labs"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Labs") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <div className="d-flex flex-column align-items-center">
          <FiGitlab className="fs-1 text-yellow" />
          <span>Labs</span>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}
