import React from "react";
import { motion } from "framer-motion";

import nxtTrends from "../assets/projects/nxt-trends.jpg";
import iplDashboard from "../assets/projects/ipl-dashboard.jpg";
import foodMunch from "../assets/projects/food-munch.jpg";
import wikipedia from "../assets/projects/wikipedia.jpg";
import workflow from "../assets/projects/workflow.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "nxtTrends E-commerce",
      description: "This is a description of project 1",
      src: nxtTrends ,
      link: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "iplDashboard ",
      description: "This is a description of project 1",
      src: iplDashboard ,
      link: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "foodMunch ",
      description: "This is a description of project 1",
      src: foodMunch ,
      link: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "wikipedia ",
      description: "This is a description of project 1",
      src: wikipedia ,
      link: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      title: "workflow ",
      description: "This is a description of project 1",
      src: workflow ,
      link: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div
      name="projects"
      className=" bg-gradient-to-b from-black to-gray-800 px-4 md:px-8 lg:px-20 xl:px-40 pt-20 h-screen"
    >
      <div className="text-white">
        <h1 className="text-4xl inline font-bold border-b-4 border-gray-500 p-2">
          Projects
        </h1>
        <p className="py-6 font-bio text-lg">
          Highlights of my projects focused on design, innovation, and technical
          problem-solving skills.
        </p>
      </div>

      <div className="max-md:space-y-10 md:grid grid-cols-3 gap-8 pb-5">
        {projects.map(({id, title, description, src, link}) => (
          <div key={id} className="text-white border-2 p-2 rounded-lg shadow-white shadow-lg hover:scale-110 duration-300">
            <img src={src} alt="" className="h-32 w-full" />
            <h2 className="text-sm mt-2 font-bold text-center">{title}</h2>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;
