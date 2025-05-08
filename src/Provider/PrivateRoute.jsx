import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   console.log(user);
  const location = useLocation();
  console.log(location);

  const showAlert = () => {
    Swal.fire({
      title: <p className="text-xl font-bold">Login Error</p>,
      html: (
        <div className="text-sm">
          <p>Your email or password didn’t match.</p>
          <a
            href="/forgot-password"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Forgot Password?
          </a>
        </div>
      ),
      icon: "error",
      showConfirmButton: true,
      confirmButtonColor: "#d33",
    });
  };

  if (loading)
    return (
      <div className="w-full h-dvh mx-auto flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  if (user && user?.email) return children;

  return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
};

export default PrivateRoute;
