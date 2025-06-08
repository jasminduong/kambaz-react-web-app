import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Users from "./Users";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-screen" style={{ textAlign: "left" }}>
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route
                path="/"
                element={
                  <Navigate
                    to={
                      currentUser // if currentUser is not empty, clicking account
                        ? "/Kambaz/Account/Profile" // navigate to profile
                        : "/Kambaz/Account/Signin" // otherwise, navigate to signin
                    }
                  />
                }
              />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Users" element={<Users />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
