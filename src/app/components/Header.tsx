"use client";
import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets.js";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-10">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile-pic"
          className="rounded-full w-32"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo "
      >
        Hi I&apos;m Nikhilraj Dumpeti
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl md:text-6xl lg:text-[66px] font-ovo"
      >
        Full Stack Developer at BlackCoat.Ai
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I am a Full Stack Developer with 2 years of experience with multiple
        companies like Blackcoat.Ai and SypD Technologies
      </motion.p>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Nikhilraj_Dumpeti_Resume.pdf"
          download
          target="_blank"
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          My Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
