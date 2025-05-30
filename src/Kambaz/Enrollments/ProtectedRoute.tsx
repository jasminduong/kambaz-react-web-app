import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function EnrolledCourseRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);

  const { cid } = useParams(); 

  console.log("courseId:", cid);
  console.log("currentUser:", currentUser);
  console.log("enrollments:", enrollments);

  // check if user is enrolled in this course
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser?._id && enrollment.course === cid
  );

  // not signed in — redirect to sign-in page
  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  // not enrolled — redirect to dashboard
  if (!isEnrolled) {
    return <Navigate to="/Kambaz/Dashboard" />;
  }

  // user signed in and enrolled — allow access
  return children;
}
