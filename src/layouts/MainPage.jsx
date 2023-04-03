import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";

const MainPage = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default MainPage;
