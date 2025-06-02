import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";

// CourseRoutes expose the database operations of courses through a RESTful API
export default function CourseRoutes(app) {
  // retrieves all courses
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.send(courses);
  });

  // deletes a course
  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params; // parses course's id from url
    const status = dao.deleteCourse(courseId);
    res.send(status); // if the deletion was successful, respond with status 204
  });

  // updates a course
  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });

  // finds modules for a course 
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  // creates a new module for the course 
  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  });

}
