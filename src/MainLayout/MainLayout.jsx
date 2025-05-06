import React from "react";
import Home from "../Pages/Home";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
