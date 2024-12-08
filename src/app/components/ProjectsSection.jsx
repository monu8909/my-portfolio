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
    title: "E-commerce and social media platform",
    description: "E-commerce and social media platform",
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
    previewUrl: "https://www.aicofindia.com/",
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
    title: "Business Website",
    description: "Business Website",
    image: "/images/Meteryard.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.meteryard.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // const filteredProjects = projectsData.filter((project) =>
  //   project.tag.includes(tag)
  // );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
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
