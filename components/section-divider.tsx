"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-black/30 my-32 h-1 w-1/2 rounded-full hidden sm:block dark:bg-white/30"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >

    </motion.div>
  );
}
