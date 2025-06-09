import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <Table striped style={{ fontSize: "12px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  to={`/Kambaz/Account/Users/${user._id}`}
                  className="text-decoration-none text-dark"
                >
                  <FaUserCircle className="me-3 fs-2 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id wd-people-info align-middle">
                {user.loginId}
              </td>
              <td className="wd-section wd-people-info align-middle">
                {user.section}
              </td>
              <td className="wd-role wd-people-info align-middle">
                {user.role}
              </td>
              <td className="wd-last-activity wd-people-info align-middle">
                {user.lastActivity}
              </td>
              <td className="wd-total-activity wd-people-info align-middle">
                {user.totalActivity}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
