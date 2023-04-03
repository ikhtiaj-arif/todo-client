import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/userContext";

const Nav = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Log Out Successfull!");
      })
      .catch((e) => toast.error(e));
  };
  return (
    <div>
      <Link to="/register">Register</Link>||
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Nav;
