import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TaskUpdate from "../components/TaskUpdate";
import MainPage from "../layouts/MainPage";
import About from "../pages/About";
import Home from "../pages/Home";

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
      // private
      {
        path: "/todos",
        element: <Sidebar />,
      },
      {
        path: "/task/:id",
        element: <TaskUpdate />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default Routes;
