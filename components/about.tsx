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
            Graduating from {" "} <span className="a_highlight highlight font-medium text-indigo-400 dark:text-red-500">University of Texas at Dallas</span> with a degree of {" "}
            <span className="a_highlight highlight font-medium text-sky-400 dark:text-orange-500">Computer Science</span>, I have been a passionate developer in
            many different areas such as algorithms and full-stack web development. {" "}
            I have participated in many competitions and done many projects through out my college years
            and am in love with the process of problem solving. {" "}
            <span className="font-medium text-blue-300 dark:text-yellow-400 a_highlight highlight ">Software Development</span> and{" "}
            <span className="font-medium text-red-300 dark:text-green-400 a_highlight highlight ">Artificial Intellgence</span>
            {' '}are two field that i like the most, while one can use the tools I learned to build functional projects, the another
            give me a glance of the future world. 
          </p>
        </div>

      </div>


    </motion.section>
  );
}
