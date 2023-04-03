import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import img from "../assects/login.svg";
import { AuthContext } from "../context/userContext";

const Login = () => {
  const { logInUser, setUser, user } = useContext(AuthContext);
  console.log(user);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("LogIn Successfull!");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="hero w-full my-20 min-h-screen ">
      <div className=" grid md:grid-cols-2 gap-20">
        <div className="">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} type="submit" className="card-body">
            <h1 className="text-5xl font-bold text-center ">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-accent" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center my-12">
            Don't Have An Account Yet?{" "}
            <Link to="/register" className="text-red-600 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
