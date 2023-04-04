import React from "react";
import hero from "../assects/hero.svg";

const Home = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 md:w-3/4 mx-auto h-screen">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={hero}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Welcome
            <br />I am <span className="dark:text-violet-400">Ikhtiaj</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            To continue you must Register your account
            <br className="hidden md:inline lg:hidden" />
            or, log in if you have an account
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Register
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
