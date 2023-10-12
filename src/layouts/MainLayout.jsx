import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useState } from "react";
import Icons from "../components/Icons";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Icons />
      <main className="align-element py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
