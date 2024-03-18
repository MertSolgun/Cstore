import React, { useState } from "react";
import Logo1 from "../components/logo1.png";
import Logo2 from "../components/logo2.png";
import { closeNavbar } from "../helper/icons";
import { openNavbar } from "../helper/icons";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [mobilMenu, setMobilMenu] = useState(false);
  const navigate = useNavigate();
  const removeLocal = async () => {
    try {
      const logOut = await axios.post("http://127.0.0.1:8002/users/logout/");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log("Log out", error);
    }
  };

  const mobilBtn = () => {
    setMobilMenu(!mobilMenu);
  };
  return (
    <nav className="navbar-bg md:text-sm justify-start">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a
            target="true"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={Logo2}
              width={60}
              className="rounded-xl"
              height={60}
              alt="Clarusway"
            />
          </a>
        </div>
        <button
          className="absolute right-5 top-10 min-[600px]:hidden text-white"
          onClick={mobilBtn}
        >
          {mobilMenu ? closeNavbar : openNavbar}
        </button>
        <div
          className={`${
            mobilMenu
              ? "flex flex-col pb-2 justify-start flex-1 items-center md:flex md:flex-row "
              : "hidden md:flex"
          }`}
        >
          <ul className="md:flex md:space-x-6 md:space-y-0">
            <li className="text-white font-montserrat font-bold  flex justify-center">
              <NavLink
                to="/dashboard"
                className={`block hover:bg-main  rounded-full py-2 px-4 hover:text-white`}
              >
                Home
              </NavLink>
            </li>
          </ul>
          <div className="items-center justify-center mt-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/dashboard/products"
              className="flex items-center justify-center  font-montserrat font-bold gap-x-1 py-2 px-4  text-white hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
            >
              Products
            </NavLink>
          </div>
          <div className=" items-center justify-center mt-6 font-montserrat font-bold  md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/"
              onClick={removeLocal}
              className="flex items-center justify-center gap-x-1 py-2 px-4  text-white font-montserrat font-bold hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
            >
              Log out
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
