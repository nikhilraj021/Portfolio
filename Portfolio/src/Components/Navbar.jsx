import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const names = [
    { id: 1, link: "home" },
    { id: 2, link: "skills" },
    { id: 3, link: "projects" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="h-20 px-4 text-white bg-black flex items-center justify-between w-full fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Nikhilraj</h1>
      </div>

      <ul className="hidden md:flex">
        {names.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-red-900 hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-2 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute flex flex-col justify-center items-center h-screen w-full top-0 left-0 bg-gradient-to-b from-black to-gray-800">
          {names.map(({ id, link }) => (
            <li key={id} className=" cursor-pointer capitalize py-4 text-3xl  ">
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
