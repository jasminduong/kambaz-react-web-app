export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Name</h2>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={6} cols={40}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label>Online Entry Options</label>
            </td>
            <td>
              <label>
                <input type="checkbox" /> Text Entry
              </label>
              <br />
              <label>
                <input type="checkbox" /> Website URL
              </label>
              <br />
              <label>
                <input type="checkbox" /> Media Recordings
              </label>
              <br />
              <label>
                <input type="checkbox" /> Student Annotation
              </label>
              <br />
              <label>
                <input type="checkbox" /> File Uploads
              </label>
            </td>
          </tr>

          <tr>
            <td>
              <label>Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>

          <tr>
            <td>
              <label></label>
            </td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>

          <tr>
            <td>
              <label></label>
            </td>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
              />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div style={{ textAlign: "right" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
