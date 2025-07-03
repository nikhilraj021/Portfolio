import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div name="contact" className=" text-white">
      <div>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-5 text-center text-4xl font-bold"
        >
          Contact
        </motion.h2>
      </div>

      <div className="md:w-[500px] lg:w-[700px] mx-auto">
        <form
          action="https://getform.io/f/avrrewxa"
          method="POST"
          className="flex flex-col gap-5"
        >
          <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
            type="text"
            name="email"
            placeholder="Enter your email"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <motion.textarea
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
            name="message"
            placeholder="Enter your message"
            rows={10}
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
          ></motion.textarea>

          <motion.button
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-5 mx-auto rounded-md hover:scale-110 duration-300">
            Let's talk
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
