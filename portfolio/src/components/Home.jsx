import React from "react";
import profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Home = () => {
  return (
    <div className="md:flex flex-row-reverse md:px-4 gap-6 lg:px-8 ">
      <div className="flex justify-center pb-12 md:pb-16 md:w-1/2  ">
        <div className="space-y-7">
          <motion.img
            src={profile}
            alt="profile"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="border border-stone-900 rounded-3xl shadow-slate-100 shadow-2xl h-80 md:h-96 xl:h-[500px]"
          />
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-signature ml-2">
            Dumpeti Nikhilraj
          </h1>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="md:w-1/2 lg:flex flex-col gap-3 xl:gap-7"
      >
        <div className="mb-3 md:space-y-1 lg:space-y-2">
          <h1 className="text-white text-xl font-extrabold lg:text-4xl xl:text-6xl ">
            I'm a
          </h1>
          <h1 className="bg-gradient-to-r font-bold from-stone-300 to-stone-600 bg-clip-text text-2xl md:text-3xl xl:text-5xl tracking-tight text-transparent">
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
        </div>
        <motion.p
          variants={childVariants}
          className="text-stone-200 text-xl xl:text-2xl  "
        >
          I'm a passionate software developer specializing in Mern-stack
          development with expertise in JavaScript, React, and Node.js. With
          1year of experience, I focus on building user-friendly applications
          and writing clean code. I’m passionate about continuous learning and
          collaboration. Check out my portfolio to see my work!
        </motion.p>
        <div className="my-5 max-md:flex justify-center md:my-8">
          <motion.a
            variants={childVariants}
            href="/resume.pdf"
            target="_blank"
            download
            className="bg-white rounded-full p-4 text-sm font-bold text-stone-800 transition ease-in-out duration-500 hover:animate-pulse hover:bg-black hover:text-white hover:border-white hover:border"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
