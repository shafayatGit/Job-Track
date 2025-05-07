import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
// import { Navigate, useLocation, useNavigate } from "react-router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSignUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const handleSignIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
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
