import React from "react";
import image from "../assets/logo.png";
import apk from "../assets/apk.png";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-5 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[200px] cursor-pointer transition-all duration-300 hover:-translate-y-5 hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1
            className="text-violet-950 bg-clip-text text-transparent text-5xl font-bold md:text-7xl mb-"
          >
            CALENDAR APP
          </h1>
          <h3
            className="text-violet-950 bg-clip-text text-transparent text-2xl font-bold md:text-3xl"
          >
            A Research Project System
          </h3>
          <p className="md:text-base text-pretty text-sm text-black font-bold">
          This calendar app serves as our research project system, fulfilling one of the requirements for our subject research project. Karl Christian Tosoc and I (John Wayne Carl Aguio) built this system to assist students who struggle to manage their time and complete their assignments on time. This study investigates how the use of the Digital Calendar affects the academic performance of ICT students in Grade 12 at the Arellano University Juan Sumulong Campus.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-row items-center justify-center gap-10 p-14 mb-5">
            <a href="../assets/Calendart.apk" download>
          <img
            src={apk}
            alt="Apk"
            className="w-36 hover:scale-105 transition-all"
          />
          </a>
        </motion.div>
      </div>
    </section>
    
  );
};

export default Project;
