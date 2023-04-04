import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import icon from "../assects/logo_no_bg.png";
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
    <div className="navbar  bg-gray-700">
      <div className="md:w-3/4 mx-auto">
        <Link className="flex-1 flex items-center text-2xl font-semibold to-white">
          <img src={icon} alt="" className="h-[105px]" />
          Todo App
        </Link>
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
    </div>
  );
};

export default Nav;
