import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

export default function EnrolledCourseRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
  const { cid } = useParams();

  console.log("courseId:", cid);
  console.log("currentUser:", currentUser);
  console.log("enrollments:", enrollments);

  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  // faculty can access all courses
  if (currentUser.role === "FACULTY") {
    return children;
  }

  // check enrollment for student users
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser?._id && enrollment.course === cid
  );

  if (!isEnrolled && enrollments.length > 0) {
    return <Navigate to="/Kambaz/Dashboard" />;
  }

  return children;
}