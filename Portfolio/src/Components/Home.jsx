import React from "react";
import { RiDownload2Fill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/heroImage.jpeg";
import hero from '../assets/hero.jpeg'
const Home = () => {
  return (
    <div
      name="home"
      className="max-md:pt-20 bg-gradient-to-b from-black to-gray-800 p-8 space-y-10 flex justify-center items-center h-screen gap-20"
    >
      <div className="md:w-2/4 md:space-y-5 space-y-4">
        <h1 className="text-white text-xl font-extrabold lg:text-4xl ">
          <span className="primary-color">I'm a</span> <br />
          <TypeAnimation
            sequence={[
              "Associate Developer",
              1000,
              "Frontend Developer",
              1000,
              "Mern Stack Developer",
              1000,
              "Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white font-bio text-md lg:text-lg">
          I’m Dumpeti Nikhilraj, I'm a software developer specializing in
          Mern-stack development with expertise in JavaScript, React, and
          Node.js. With 1year of experience, I focus on building user-friendly
          applications and writing clean code. I’m passionate about continuous
          learning and collaboration. Check out my portfolio to see my work!
        </p>
        <div className="flex gap-5 max-md:justify-center ">
          <a
            href="/resume.pdf"
            target="_blank"
            className="primary-color font-bold border-2 py-1 px-4 rounded-xl cursor-pointer"
          >
            Resume
          </a>
          <a
            href="/resume.pdf"
            download="Resume_Dumpeti_Nikhilraj.pdf"
            className="flex items-center gap-2 border-2 border-pink-500 py-1 px-4 rounded-xl cursor-pointer font-bold text-white"
          >
            Download
            <span>
              <RiDownload2Fill />
            </span>
          </a>
        </div>
      </div>
      <div className="hidden md:flex">
        <img src={hero} alt="profile" className="rounded-2xl md:h-80 lg:h-96 shadow-2xl shadow-white" />
      </div>
    </div>
  );
};

export default Home;
