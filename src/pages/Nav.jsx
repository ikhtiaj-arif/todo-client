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
    <div className="navbar md:w-3/4 mx-auto bg-base-100">
      <div className="flex-1 text-2xl font-semibold to-white">
        <Link to="/">Todo App</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {user && user?.uid ? (
            <li>
              <Link to="/todos">All Todos</Link>
            </li>
          ) : (
            <li></li>
          )}

          <li>
            {user ? (
              <button
                className="btn bg-violet-500 text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
    // <div>
    //   <Link to="/register">Register</Link>||
    //   {user ? (
    //     <button onClick={handleLogout}>Logout</button>
    //   ) : (
    //     <Link to="/login">Login</Link>
    //   )}
    // </div>
  );
};

export default Nav;
