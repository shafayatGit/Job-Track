import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { AuthContext } from "../Components/AuthContext";
// import { Navigate, useLocation, useNavigate } from "react-router";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSignUp = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const handleSignIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        // setLoading(false);
      })
      .catch((error) => {
        // setLoading(false);
        console.log(error);
      });
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);
  const contextValue = {
    handleSignUp,
    handleSignIn,
    setUser,
    user,
    handleSignOut,
    loading,
    setLoading,
    updateUser,
  };
  return <AuthContext value={contextValue}>{children}</AuthContext>;
};

export default AuthProvider;
