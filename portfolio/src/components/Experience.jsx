import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const EXPERIENCES = [
    {
      year: "Jan,2025 - Present",
      role: "Full Stack Intern",
      company: "Estaval.Ai",
      description: `Assisted in developing web applications using JavaScript, React.js, and Node.js. Collaborated with team on bug fixes, built multiple responsive pages, and maintained project documentation..`,
      technologies: ["Javascript", "React.js", "TailwindCSS", "Node.js"],
    },
  ];
  return (
    <div className="pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-paint"
      >
        Experience
      </motion.h2>
      {EXPERIENCES.map((experience, index) => (
        <div
          key={index}
          className="mb-8 md:mx-10 flex flex-wrap lg:justify-center"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-2 font-semibold">
              {experience.role} -
              <span className="text-sm text-stone-500 ml-1">
                {experience.company}
              </span>
            </h3>
            <p className="mb-4 text-stone-400">{experience.description}</p>
            <div className="flex flex-wrap mt-4">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="m-1 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
