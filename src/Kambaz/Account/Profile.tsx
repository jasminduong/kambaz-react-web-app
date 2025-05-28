import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  // initializes state variable profile and mutator function setProfile
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // fetchProfile event handler calls mutator function setProfile if current user is logged in
  // otherwise redirects user to signin page
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };

  // signout event handler clears the current user from the redux store and then redirects user to signin page
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  // useEffect automatically run the fetchProfile() function when the Profile component first mounts (appears on the screen)
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen">
      <h4 id="wd-profile-title">Profile</h4>
      {profile && (
        <div>
          <Form.Control
            id="wd-username"
            placeholder="Username"
            defaultValue={profile.username}
            className="mb-2 text-input-field"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />

          <Form.Control
            id="wd-password"
            placeholder="Password"
            defaultValue={profile.password}
            className="mb-2 text-input-field"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />

          <Form.Control
            id="wd-firstname"
            placeholder="First name"
            defaultValue={profile.firstname}
            className="mb-2 text-input-field"
            onChange={(e) =>
              setProfile({ ...profile, firstname: e.target.value })
            }
          />

          <Form.Control
            id="wd-lastname"
            placeholder="Last name"
            defaultValue={profile.lastname}
            className="mb-2 text-input-field"
            onChange={(e) =>
              setProfile({ ...profile, lastname: e.target.value })
            }
          />

          <Form.Control
            type="date"
            defaultValue={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />

          <Form.Control
            id="wd-email"
            placeholder="Email"
            defaultValue={profile.email}
            className="mb-2 text-input-field"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />

          <Form.Select
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="form-control mb-2"
            id="wd-role"
          >
            <option value="USER">User</option>
            <option value="STUDENT">Student</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
          </Form.Select>

          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
