import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import MainPage from "../layouts/MainPage";
import About from "../pages/About";

import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default Routes;
