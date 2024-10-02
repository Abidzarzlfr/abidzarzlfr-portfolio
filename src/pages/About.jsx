import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import graduation from "../assets/carousel/graduation.svg";
import len1 from "../assets/carousel/len-internship-1.svg";
import len2 from "../assets/carousel/len-internship-2.svg";
import pindad1 from "../assets/carousel/pindad-internship-1.svg";
import practicum1 from "../assets/carousel/practicum-1.svg";
import practicum2 from "../assets/carousel/practicum-2.svg";
import DownloadButton from "../components/DownloadButton";
import resume from "../assets/download/Resume.pdf";
import academicTranscript from "../assets/download/Academic Transcript.pdf";
import CarouselAbout from "../components/CarouselAbout";

export default function About() {
  const carouselItems = [
    {
      imgSrc: graduation,
      date: "Aug 20 - Jul 24",
      title: "Bachelor of Computer Science",
    },
    { imgSrc: len1, date: "Aug 23 - Dec 23", title: "Frontend Developer" },
    { imgSrc: len2, date: "Aug 23 - Dec 23", title: "Frontend Dev Activity" },
    { imgSrc: pindad1, date: "Jul 23 - Sep 23", title: "Software Developer" },
    {
      imgSrc: practicum1,
      date: "Aug 22 - Jan 23",
      title: "Practicum Assistant",
    },
    {
      imgSrc: practicum2,
      date: "Aug 22 - Jan 23",
      title: "Practicum Assistant Activity",
    },
  ];

  return (
    <div className="about hero bg-base-200 mt-16">
      <div className="about-content hero-content flex-col lg:flex-row">
        {/* Carousel Section */}
        <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 lg:w-2/3 md:w-full">
          {carouselItems.map((item, index) => (
            <CarouselAbout
              key={index}
              imgSrc={item.imgSrc}
              date={item.date}
              title={item.title}
            />
          ))}
        </div>

        {/* About Section */}
        <div className="text-start md:w-full lg:w-1/2 ps-3">
          <h1 className="text-3xl font-bold text-secondary lg:text-left sm:text-center">
            <code>About Me</code> 🧑🏻‍💻
          </h1>
          <p className="py-4 lg:text-left sm:text-center">
            <code className="text-sm">
              I have recently completed my bachelor's degree in Information
              Systems and have a strong interest in software engineering. My
              goal is to be part of a team that collaborates to achieve common
              goals and makes a positive impact on organizations or companies.
            </code>
          </p>

          {/* Buttons and Links Section */}
          <div className="about-document mt-2 flex flex-wrap gap-3 sm:justify-center lg:justify-start">
            <DownloadButton
              fileName="Abidzar Zulfa Arifa Kusyono - Resume"
              text="Resume"
              style="btn btn-outline btn-primary"
              url={resume}
            />
            <DownloadButton
              fileName="Abidzar Zulfa Arifa Kusyono - Academic Transcript"
              text="Academic Transcript"
              style="btn btn-accent"
              url={academicTranscript}
            />
            <a
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/abidzar-zulfa-arifa-kusyono-0550221ba",
                  "_blank"
                )
              }
            >
              <FaLinkedin className="text-5xl text-blue-400 cursor-alias" />
            </a>
            <a
              onClick={() =>
                window.open("https://github.com/Abidzarzlfr", "_blank")
              }
            >
              <FaGithubSquare className="text-5xl text-purple-500 cursor-alias" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
