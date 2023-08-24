import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiOfficeChairDuotone} from 'react-icons/pi'
import corpcommentImg from "@/public/corpcomment.png";
import discordBot from '@/public/discord_bot.png'
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import pinyougou from '@/public/pinyougou.png';
import testPortfolio from '@/public/portfolio_test.png'
import tutorKing from '@/public/tutorKing.png'
import equiteach from '@/public/equiteach.png'
import bookstore from '@/public/bookstore.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Tax Office Intern",
    location: "Dallas, TX",
    description:
      "I worked as a tax office intern at a local tax office. I helped clients with their tax returns and answered questions about tax laws. I also helped with the office's website and social media marketing.",
    icon: React.createElement(PiOfficeChairDuotone),
    date: "2019",
  },
  {
    title: "Hackathon Dallas 2021 - 1st place",
    location: "Dallas, TX",
    description:
      "I worked with a team of 4 to build a web app that uses tech-stacks such as React Natives, AWS, DynamoDB created a mobile app that allows users get the education they need online powered by Machine Learning.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "University of Texas at Dallas",
    location: "Dallas, TX",
    description:
      "I started my bachelor's degree in computer science at UTD and graduated in 2023. ",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: 'Equiteach',
    description:'',
    tags: ["React", "AWS", "Tailwind", "ESG dashboard", "Python", "DynamoDB", "JavaScript", "React Native"],
    imageUrl: equiteach,
  },
  {
    title: "Between the Lines",
    description:
      "A website that uses google API to",
    tags: ["Angular", "Tailwind", "Google API", "MongoDB"],
    imageUrl: bookstore,
  },
  {
    title: "Tutor King",
    description:
      'An online tutoring platform that connects students with tutors. It uses react.js, Tailwind, MongoDB and Prisma.',
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: tutorKing,
  },
  {
    title: "Pin You Gou",
    description:
    'An e-commerce website that sells products from China. It uses Next.js, Tailwind, MongoDB and Redux.',
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", 'MongoDB'],
    imageUrl: pinyougou,
  },
  {
    title: "Discord Bot",
    description:
    "A Discord bot that use OpenAI API to generate text. It can answer questions based on a given context.",
    tags: ["OpenAI", "Discord API"],
    imageUrl: discordBot,
  },
  {
    title: "Text Portfolio",
    description:
      "A portfolio website that uses Framer Motion to animate the text. It's built with Next.js and Tailwind for testing",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: testPortfolio,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
  "AWS",
  "DynamoDB",
  "Prisma",
] as const;
