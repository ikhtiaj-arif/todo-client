import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase_config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUser = () => {
    setLoading(true);
    localStorage.removeItem("motocross-token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log(user);
  const info = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    logInUser,
    googleLogin,
    logOutUser,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default UserContext;
