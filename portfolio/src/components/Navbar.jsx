import React from "react";
import logo from "../assets/Logo4.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const socialMedia = [
    {
      id: 1,
      star: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/nikhilraj-dumpeti/",
    },
    {
      id: 1,
      star: "Github",
      icon: <FaGithub />,
      url: "https://github.com/nikhilraj021",
    },
    {
      id: 3,
      star: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/accounts/login/",
    },
    {
      id: 4,
      star: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/home",
    },
  ];

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="#" aria-label="Home">
          <img
            src={logo}
            alt="Logo"
            className=" md:h-20 md:w-32"
            height={50}
            width={80}
          />
          {/* <h1 className="text-5xl font-signature ml-2">Nikhilraj</h1> */}
        </a>
      </div>

      <div className="m-8 flex items-center gap-4 justify-center text-2xl">
        {socialMedia.map(({ id, icon, url, star }) => (
          <a key={id} href={url} target="_blank" aria-label={star}>
            {icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
