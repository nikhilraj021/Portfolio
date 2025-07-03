import React from "react";
import nxtTrends from "../assets/projects/nxt-trends.jpg";
import iplDashboard from "../assets/projects/ipl.jpg";
import foodMunch from "../assets/projects/food-munch.jpg";
import workFlow from "../assets/projects/workflow.jpg";
import wikipedia from "../assets/projects/wikipedia.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  const PROJECTS = [
    {
      title: "E-Commerce Application",
      image: nxtTrends,
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "JavaScript"],
      visitLink: "https://appnxttrendz.ccbp.tech/login",
      gitLink: "https://github.com/nikhilraj021/NxtTrendz-Cart-Features",
    },
    {
      title: "IPL Dashboard App",
      image: iplDashboard,
      description:
        "An application for IPL dashboard with features like live match updates, player statistics, team rankings, and match schedules.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      visitLink: "https://ipldashboard021.ccbp.tech",
      gitLink: "https://github.com/nikhilraj021/IPL_Dashboard",
    },
    {
      title: "Restaurant Website",
      image: foodMunch,
      description:
        "A Food Munch Application with features like Food Menu, Delivery and Payment, Why choose us, Follow us.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      visitLink: "https://resappfoodmunch.ccbp.tech",
      gitLink: "https://github.com/nikhilraj021/Food_Munch",
    },
    {
      title: "Wikipedia Website",
      image: wikipedia,
      description:
        "A Wikipedia application with features like article browsing, search functionality, user contributions, and content editing",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      visitLink: "https://wikipedia.ccbp.tech",
      gitLink: "https://github.com/nikhilraj021/WebSearchApp",
    },
    {
      title: "Workflow Management",
      image: workFlow,
      description:
        "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      visitLink: "https://todolist.ccbp.tech/",
      gitLink: "https://github.com/nikhilraj021/Simple-todos",
    },
  ];

  return (
    <div className="pb-4 md:pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>
      {PROJECTS.map(
        (
          { title, image, description, technologies, visitLink, gitLink },
          index
        ) => (
          <div
            key={index}
            className="my-10 md:flex justify-center gap-5 cursor-pointer relative group"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=""
            >
              <img
                src={image}
                className="rounded-xl max-md:w-full hover:shadow-xl shadow-white"
                alt={title}
                width={250}
                height={250}
              />
              {/* Button container that appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <a
                  href={visitLink}
                  className="px-4 py-2 mx-2 bg-blue-600 text-white rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
                <a
                  href={gitLink}
                  className="px-4 py-2 mx-2 bg-gray-700 text-white rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="md:w-1/2 max-md:my-3"
            >
              <h2 className="font-semibold text-xl">{title}</h2>
              <p className="text-sm text-stone-400 my-1">{description}</p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-stone-900 p-1 text-xs text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
