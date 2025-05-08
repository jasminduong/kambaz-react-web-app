export default function Modules() {
  return (
    <div style={{ textAlign: "left" }}>
      <button id="wd-collapse-all">Collapse All</button>
      <button id="wd-view-progress">View Progress</button>
      <select id="wd-publish-all">
        <option value="PUBLISH ALL">Publish All</option>
      </select>
      <button id="wd-module">+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 1 - Introduction to Web Development
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 0 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Creating User Interfaces
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Web Development
                </li>
                <li className="wd-content-item">
                  Creating an HTTP server with Node.js
                </li>
                <li className="wd-content-item">
                  Creating a React Application
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <br></br>

        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 2 - Prototyping the React Kambaz User Interface with
            HTML
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-content-item">
                  Deploy the assignment to Netlify
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Creating User Interfaces
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to HTML and the DOM
                </li>
                <li className="wd-content-item">
                  Formatting Web content with Headings and Paragraphs
                </li>
                <li className="wd-content-item">
                  Formatting content with Lists and Tables
                </li>
                <li className="wd-content-item">Creating Web Forms</li>
                <li className="wd-content-item">Navigating with Anchors</li>
              </ul>
            </li>
          </ul>
        </li>
        <br></br>

        <li className="wd-module">
          <div className="wd-title">
            Week 2, Lecture 3 - Styling Web Pages with CSS and Bootstrap
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">
                  Selectors by tag ID and classes
                </li>
                <li className="wd-content-item">
                  Styling color and background
                </li>
                <li className="wd-content-item">
                  Styling dimensions and positions
                </li>
                <li className="wd-content-item">
                  The box model - styling margins, borders, and paddings
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 3 - Styling Web Pages with CSS
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to Cascading Style Sheets
                </li>
                <li className="wd-content-item">Styling with Colors</li>
                <li className="wd-content-item">The Box Model</li>
                <li className="wd-content-item">Size and Position</li>
                <li className="wd-content-item">Float</li>
                <li className="wd-content-item">Flex</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
