import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import graduation from "../assets/about/graduation.svg";
import len1 from "../assets/about/len-internship-1.svg";
import len2 from "../assets/about/len-internship-2.svg";
import pindad1 from "../assets/about/pindad-internship-1.svg";
import practicum1 from "../assets/about/practicum-1.svg";
import practicum2 from "../assets/about/practicum-2.svg";
import DownloadButton from "../components/DownloadButton";
import resume from "../assets/downloadFile/Resume.pdf";
import academicTranscript from "../assets/downloadFile/Academic Transcript.pdf";

// Reusable CarouselItem component
const CarouselItem = ({ imgSrc, date }) => (
  <div className="carousel-item relative">
    <img src={imgSrc} alt="carousel-item" className="rounded-box" />
    <div className="absolute bottom-1 left-1">
      <button className="btn btn-sm btn-primary rounded-xl">{date}</button>
    </div>
  </div>
);

export default function About() {
  const carouselItems = [
    { imgSrc: graduation, date: "17-10-2001" },
    { imgSrc: len1, date: "17-10-2001" },
    { imgSrc: len2, date: "17-10-2001" },
    { imgSrc: pindad1, date: "17-10-2001" },
    { imgSrc: practicum1, date: "17-10-2001" },
    { imgSrc: practicum2, date: "17-10-2001" },
  ];

  return (
    <div className="about hero bg-base-200 mt-16">
      <div className="about-content hero-content flex-col lg:flex-row">
        {/* Carousel Section */}
        <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 lg:w-2/3 md:w-full">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} imgSrc={item.imgSrc} date={item.date} />
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
          <div className="about-document mt-2 flex gap-3 sm:justify-center lg:justify-start">
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
            <a href="">
              <FaLinkedin className="text-5xl text-blue-400" />
            </a>
            <a href="">
              <FaGithubSquare className="text-5xl text-purple-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
