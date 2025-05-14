import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped style={{fontSize: "12px"}}>
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
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-3 fs-2 text-secondary" />
              <span className="wd-first-name">Jasmin</span>{" "}
              <span className="wd-last-name">Duong</span>
            </td>
            <td className="wd-login-id wd-people-info align-middle">0012345678</td>
            <td className="wd-section wd-people-info align-middle">S101</td>
            <td className="wd-role wd-people-info align-middle">STUDENT</td>
            <td className="wd-last-activity wd-people-info align-middle">2025-5-13</td>
            <td className="wd-total-activity wd-people-info align-middle">03:14:05</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-3 fs-2 text-secondary" />
              <span className="wd-first-name">Andrea</span>{" "}
              <span className="wd-last-name">Lee</span>
            </td>
            <td className="wd-login-id wd-people-info align-middle">0023456781</td>
            <td className="wd-section wd-people-info align-middle">S101</td>
            <td className="wd-role wd-people-info align-middle">STUDENT</td>
            <td className="wd-last-activity wd-people-info align-middle">2025-5-12</td>
            <td className="wd-total-activity wd-people-info align-middle">05:31:05</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-3 fs-2 text-secondary" />
              <span className="wd-first-name">Jayden</span>{" "}
              <span className="wd-last-name">Ngo</span>
            </td>
            <td className="wd-login-id wd-people-info align-middle">0034567812</td>
            <td className="wd-section wd-people-info align-middle">S101</td>
            <td className="wd-role wd-people-info align-middle">STUDENT</td>
            <td className="wd-last-activity wd-people-info align-middle">2025-5-13</td>
            <td className="wd-total-activity wd-people-info align-middle">06:18:05</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-3 fs-2 text-secondary" />
              <span className="wd-first-name">Alice</span>{" "}
              <span className="wd-last-name">Lee</span>
            </td>
            <td className="wd-login-id wd-people-info align-middle">0045678123</td>
            <td className="wd-section wd-people-info align-middle">S101</td>
            <td className="wd-role wd-people-info align-middle">STUDENT</td>
            <td className="wd-last-activity wd-people-info align-middle">2025-5-14</td>
            <td className="wd-total-activity wd-people-info align-middle">01:26:04</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-3 fs-2 text-secondary" />
              <span className="wd-first-name">Eshal</span>{" "}
              <span className="wd-last-name">Jahan</span>
            </td>
            <td className="wd-login-id wd-people-info align-middle">0056781234</td>
            <td className="wd-section wd-people-info align-middle">S101</td>
            <td className="wd-role wd-people-info align-middle">STUDENT</td>
            <td className="wd-last-activity wd-people-info align-middle">2025-5-15</td>
            <td className="wd-total-activity wd-people-info align-middle">07:10:04</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-3 fs-2 text-secondary" />
              <span className="wd-first-name">Avni</span>{" "}
              <span className="wd-last-name">Mishra</span>
            </td>
            <td className="wd-login-id wd-people-info align-middle">0056781234</td>
            <td className="wd-section wd-people-info align-middle">S101</td>
            <td className="wd-role wd-people-info align-middle">STUDENT</td>
            <td className="wd-last-activity wd-people-info align-middle">2025-5-13</td>
            <td className="wd-total-activity wd-people-info align-middle">04:09:05</td>
          </tr>

          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-3 fs-2 text-secondary" />
              <span className="wd-first-name">Jose</span>{" "}
              <span className="wd-last-name">Annunziato</span>
            </td>
            <td className="wd-login-id wd-people-info align-middle">0000000009</td>
            <td className="wd-section wd-people-info align-middle">S101</td>
            <td className="wd-role wd-people-info align-middle">INSTRUCTOR</td>
            <td className="wd-last-activity wd-people-info align-middle">2025-5-16</td>
            <td className="wd-total-activity wd-people-info align-middle">50:01:59</td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
}
