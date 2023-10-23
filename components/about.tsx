"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from 'next/image'

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div>

        {/* <img src="/profile.png" className=" w-auto mx-auto mb-10 image_box_close" /> */}

        <div >
          <p className="my-3">
            <span className="a_highlight highlight font-bold text-indigo-400 dark:text-red-500">University of Texas at Dallas</span> graduate with a degree of {" "}
            <span className="a_highlight highlight font-bold text-sky-400 dark:text-orange-500">Computer Science</span>, I have had
            {" "} <span className="font-bold text-red-300 dark:text-green-400 a_highlight highlight ">demonstrable track record</span>  of driving results and 
            {" "} <span className="font-bold text-blue-300 dark:text-yellow-400 a_highlight highlight ">fostering collaborative </span>{" "}
            team work to achieve shared objectives. {" "}
            Skilled in a variety of programming languages & database software such as 
            {" "} <span className=" font-bold text-cyan-300 dark:text-blue-500 a_highlight highlight "> Java, Python, Spring Boot, React, and SQL.</span> {" "}
            Renowned among peers for unwavering dedication and a profound passion for achieving excellence.
          </p>
        </div>

      </div>


    </motion.section>
  );
}
