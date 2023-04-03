import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TaskUpdate from "../components/TaskUpdate";
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
        element: <Sidebar />,
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
