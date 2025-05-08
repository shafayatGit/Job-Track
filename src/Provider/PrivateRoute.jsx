import React, { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // console.log(user);
  const location = useLocation();
  // console.log(loading);

  if (loading && user !== null)
    return (
      <div className="w-full h-dvh mx-auto flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  if (user) return children;

  return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
};

export default PrivateRoute;
