// import React, { createContext, useEffect, useState } from "react";
import Home from "../Pages/Home";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../../firebase.config";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer";

// export const valueContext = createContext();

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
