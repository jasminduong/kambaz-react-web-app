import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

// Enrollments dao.js implements various CRUD operations for handling the array of enrollment of users in the Database

// function to add user to a course
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}
