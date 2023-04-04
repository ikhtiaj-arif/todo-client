import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import img from "../assects/login.svg";
import { AuthContext } from "../context/userContext";

const Login = () => {
  const { logInUser, setUser, user, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
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
        navigate("/todos");
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Account Created!");
        navigate("/todos");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="hero w-full lg:w-3/4 mx-auto my-20  ">
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
                type="password"
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
              <input
                className="btn bg-violet-400 text-white"
                type="submit"
                value="Login"
              />
            </div>
            <button className="btn  text-white" onClick={handleGoogleLogin}>
              Google SignIn
            </button>
          </form>
          <p className="text-center mb-5">
            Don't Have An Account Yet?{" "}
            <Link to="/register" className="text-accent font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
