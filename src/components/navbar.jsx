import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-gray-800 p-4 relative lg:px-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white text-lg font-semibold">Harmony</h1>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <ul
            className={`lg:flex ${
              isOpen ? "block" : "hidden"
            } mt-0 lg:mt-2 lg:w-1/2 lg:h-10 pl-2 z-[1] lg:justify-end lg:items-center h-screen absolute top-0 bg-gray-800 right-0`}
          >
            <li className="flex flex-row-reverse p-0 m-0">
              <button
                className="text-white lg:hidden bg-red-700 py-1 px-2 rounded-sm mb-5"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faX} className="self-end justify-end" />
              </button>
            </li>
            <li className="mr-8 border-b-2 pt-3 lg:pt-0">
              <Link to={"/"} className="text-white">
                Home
              </Link>
            </li>
            <li className="mr-8 border-b-2 pt-3 lg:pt-0">
              <Link to={"/about"} className="text-white">
                About
              </Link>
            </li>
            <li className="mr-8 border-b-2 pt-3 lg:pt-0">
              <Link to={"/service"} className="text-white">
                Service
              </Link>
            </li>
            <li className="mr-8 border-b-2 pt-3 lg:pt-0">
              <Link to={"/team"} className="text-white">
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
