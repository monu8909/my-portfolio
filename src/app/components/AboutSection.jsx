"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Redux</li>
        <li>Javascript</li>
        <li>Html /Css /Sass /Scss /Less</li>
        <li>Animated CSS</li>
        <li>Tailwind</li>
        <li>Material UI</li>
        <li>Axios</li>
        <li>Formic</li>
        <li>Yup</li>
        <li>Git</li>
        <li>API Integration</li>
        <li>Bootstrap</li>
        <li>Core Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          BCA (BACHELOR OF COMPUTER APPLICATION) |<br /> Dr. Bhimrao Ambedkar
          University | <br /> 2017-2020
        </li>
        <br />
        <li>
          12TH UP BOARD (PCM) |<br /> Gautam Rishi Inter College | <br /> 2017
        </li>
        <br />
        <li>
          10TH UP BOARD (PCM) |<br /> Gautam Rishi Inter College | <br /> 2015
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a React JS Developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            JavaScript, React, Redux, Node.js, Express, NextJS, HTML, CSS, and
            Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
