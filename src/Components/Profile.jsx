import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UpdateProfile from "./UpdateProfile";
import NoProfile from "./NoProfile";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  return (
    <div>
      <Helmet>
        <title>JobTrack | Profile</title>
      </Helmet>
      <div className="mt-22">
        {user ? <UpdateProfile></UpdateProfile> : <div>ami nai</div>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
