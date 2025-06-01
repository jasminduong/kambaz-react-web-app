import * as dao from "./dao.js";

// CourseRoutes expose the database operations of courses through a RESTful API
export default function CourseRoutes(app) {
    
  // gets all courses
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.send(courses);
  });
}
