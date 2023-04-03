import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../assects/login.svg";
import { AuthContext } from "../context/userContext";

const Login = () => {
  const { logInUser, setUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((e) => console.log(e));
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
            New To Genius Car ?{" "}
            <Link to="/signup" className="text-orange-600 font-bold">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
