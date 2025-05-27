import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// ProtectedRoute uses the currentUser in the store to determine whether there's someone signed in or not
// The children parameter is a reference to the protected screen or component and 
// if there's someone signed in, the ProtectedRoute returns the children reference allowing the signed in user to access the route
// if no one is signed in, ProtedRoute navigates the user to the Sign in screen.
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }
}
