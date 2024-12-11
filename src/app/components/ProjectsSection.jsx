"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce and social media platform",
    description: "E-commerce and social media platform",
    image: "/images/Cali-s-Diary.png",
    tag: ["All", "Web"],
    previewUrl: "https://calisdiary.com/",
  },
  {
    id: 2,
    title: "E-commerce platform",
    description: "E-commerce platform",
    image:
      "/images/Dispensary-deals-weed-promos-BOGO-deals-near-you-Leafly.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.leafly.com",
  },

  {
    id: 4,
    title: "Internal Portal",
    description: "Internal Portal",
    image: "/images/AIC-OF-INDIA-LIMITED1.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://myaic.aicofindia.com/",
  },
  {
    id: 5,
    title: "Government Website",
    description: "Business Website",
    image: "/images/AIC-OF-INDIA-LIMITED.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://www.aicofindia.com/",
  },
  {
    id: 6,
    title: "Real state Website",
    description: "Real state Website",
    image: "/images/Meteryard.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.meteryard.com/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
