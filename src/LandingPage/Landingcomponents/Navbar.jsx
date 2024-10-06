import { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react';  // Import Hamburger from the package
import { logo } from "../Landingassets";  // Assuming you have a logo in your assets
import { navLinks } from "../Landingconstants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setOpen] = useState(false); // State for toggling hamburger

  return (
    <nav className="w-full flex py-2 justify-between items-center navbar bg-white">
      {/* Logo */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[90px]" />

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-[#0066FF]" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Hamburger Icon from hamburger-react */}
        <Hamburger toggled={isOpen} toggle={setOpen} color="#000000" size={30} /> {/* Customized size and color */}

        {/* Sidebar Menu */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 w-[250px] rounded-xl sidebar shadow-lg`} // Sidebar with larger width
        >
          <ul className="list-none flex flex-col justify-start items-start flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-[#0066FF]" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setOpen(false); // Close the sidebar after clicking a link
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
