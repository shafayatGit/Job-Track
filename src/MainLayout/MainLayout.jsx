import React, { createContext, useEffect, useState } from "react";
import Home from "../Pages/Home";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { ToastContainer } from "react-toastify";

export const valueContext = createContext();

const MainLayout = () => {
  const [user, setUser] = useState(null);
  const handleSignUp = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleSignIn = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        console.log(currentUser);
        setUser(currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(currentUser);
        // if (currentUser) {
        //   const uid = currentUser.uid;
        // } else {
        //   // User is signed out
        //   // ...
        // }
      });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    handleSignUp,
    handleSignIn,
    setUser,
    user,
  };
  return (
    <div className="max-w-6xl mx-auto ">
      <valueContext.Provider value={contextValue}>
        <Navber></Navber>
        <Outlet></Outlet>
      </valueContext.Provider>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
