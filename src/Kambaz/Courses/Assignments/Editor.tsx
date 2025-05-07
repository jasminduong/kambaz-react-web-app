export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentange">Percentage</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <div>
            <td align="right" valign="top">
              <select id="wd-submission-type">
                <option value="Online">Online</option>
              </select>
              <div>
                <label id="wd-text-entry">
                  <input type="checkbox" /> Text Entry
                </label>
                <br />
                <label id="wd-website-url">
                  <input type="checkbox" /> Website URL
                </label>
                <br />
                <label id="wd-media-recordings">
                  <input type="checkbox" /> Media Recordings
                </label>
                <br />
                <label id="wd-student-annotation">
                  <input type="checkbox" /> Student Annotation
                </label>
                <br />
                <label id="wd-file-upload">
                  <input type="checkbox" /> File Uploads
                </label>
              </div>
            </td>
          </div>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assign</label>
          </td>
          <td align="right" valign="top">
            <label id="wd-assign-to">Assign to</label>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
          </td>
        </tr>

        <tr>
          <td align="left" valign="top">
            <div>
              <div>
                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input
                  id="wd-available-from"
                  type="date"
                  defaultValue="2024-05-06"
                />
              </div>
              <div>
                <label htmlFor="wd-available-until">Until</label>
                <br />
                <input
                  id="wd-available-until"
                  type="date"
                  defaultValue="2024-05-20"
                />
              </div>
            </div>
          </td>
        </tr>
      </table>
      <button>Cancel</button> <button>Save</button>
    </div>
  );
}
