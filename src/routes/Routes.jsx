import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Sidebar from "../components/Sidebar";
import TaskUpdate from "../components/TaskUpdate";
import MainPage from "../layouts/MainPage";
import About from "../pages/About";
import Home from "../pages/Home";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
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
        element: (
          <PrivateRoute>
            <Sidebar />,
          </PrivateRoute>
        ),
      },
      {
        path: "/task/:id",
        element: (
          <PrivateRoute>
            <TaskUpdate />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default Routes;
