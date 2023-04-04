import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import img from "../assects/login.svg";
import { AuthContext } from "../context/userContext";
import { setAuthToken } from "../hooks/Auth";

const Register = () => {
  const {
    createUser,
    updateUserName,
    googleLogin,
    setUser,
    setLoading,
    logOutUser,
  } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setName(name);

        const userData = {
          uid: user?.uid,
          email: user?.email,
        };
        // console.log(userData);
        setAuthToken(userData);
        setLoading(false);
        toast.success("Account Created!");
      })
      .catch((e) => toast.error(e.message));
  };

  const setName = (name) => {
    let profile = {
      displayName: name,
    };
    updateUserName(profile)
      .then(() => {})
      .catch((e) => toast.error(e.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Account Created!");
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
          <form onSubmit={handleSignUp} type="submit" className="card-body">
            <h1 className="text-5xl font-bold text-center py-">SignUp</h1>
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
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
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
                value="SignUp"
              />
            </div>
            <button className="btn text-white" onClick={handleGoogleLogin}>
              Google SignIn
            </button>
          </form>
          <p className="text-center mb-5">
            Have An Account?{" "}
            <Link to="/login" className="text-accent font-bold">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
