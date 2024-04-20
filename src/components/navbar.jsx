import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white text-lg font-semibold">Company</h1>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <ul className={`lg:flex ${isOpen ? "block" : "hidden"} mt-4 lg:mt-0`}>
            <li className="mr-6">
              <a className="text-white" href="#home">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a className="text-white" href="#about">
                About
              </a>
            </li>
            <li className="mr-6">
              <a className="text-white" href="#services">
                Services
              </a>
            </li>
            <li className="mr-6">
              <a className="text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
