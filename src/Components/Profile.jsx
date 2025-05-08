import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UpdateProfile from "./UpdateProfile";
import NoProfile from "./NoProfile";

const Profile = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  return (
    <div>
      <div>
        {user ? <UpdateProfile></UpdateProfile> : <NoProfile></NoProfile>}
      </div>
    </div>
  );
};

export default Profile;
