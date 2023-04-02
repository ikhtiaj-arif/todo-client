import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layouts/MainPage";
import About from "../pages/About";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default Routes;
