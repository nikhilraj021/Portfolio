import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import nextjs from "../assets/nextjs.png";

const Skills = () => {
  const techs = [
    { id: 1, title: "HTML", src: html, style: "shadow-orange-500" },
    { id: 2, title: "CSS", src: css, style: "shadow-blue-500" },
    { id: 5, title: "Tailwind", src: tailwind, style: "shadow-sky-300" },
    { id: 3, title: "JavaScript", src: javascript, style: "shadow-yellow-500" },
    { id: 4, title: "React", src: react, style: "shadow-teal-300" },
    { id: 6, title: "Next Js", src: nextjs, style: "shadow-white" },
    { id: 7, title: "Node Js", src: node, style: "shadow-green-300" },
    { id: 8, title: "GitHub", src: github, style: "shadow-gray-300" },
  ];

  return (
    <div
      name="skills"
      className="  bg-gradient-to-b from-black to-gray-800 pt-16"
    >
      <div className="p-4  flex flex-col justify-center text-white w-full h-full mx-auto md:px-8 lg:px-20 xl:px-40">
        <div>
          <h1 className="text-4xl inline font-bold border-b-4 border-gray-500 p-2">
            Skills
          </h1>
          <p className="py-6 font-bio text-lg">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:py-8 px-2">
          {techs.map(({id, title, src, style}) =>(
            <div key={id} className={`shadow-md hover:scale-105 duration-500 ${style}`}>
              <img src={src} alt="" className="w-14 md:w-20 mx-auto" />
              <p className="my-2 md:mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
