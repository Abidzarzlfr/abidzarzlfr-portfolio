import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import graduation from "../assets/about/graduation.svg"
import len1 from "../assets/about/len-internship-1.svg";
import len2 from "../assets/about/len-internship-2.svg";
import pindad1 from "../assets/about/pindad-internship-1.svg";
import practicum1 from "../assets/about/practicum-1.svg";
import practicum2 from "../assets/about/practicum-2.svg";

export default function About() {
  return (
    <div className="about hero bg-base-200 mt-16">
      <div className="about-content hero-content flex-col lg:flex-row">
        <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 lg:w-2/3 md:w-full">
          <div className="carousel-item relative">
            <img
              src={graduation}
              className="rounded-box"
            />
            <div className="absolute bottom-1 left-1">
              <button className="btn btn-sm btn-primary rounded-xl">17-10-2001</button>
            </div>
          </div>
          <div className="carousel-item relative">
            <img
              src={len1}
              className="rounded-box"
            />
            <div className="absolute bottom-1 left-1">
              <button className="btn btn-sm btn-primary rounded-xl">17-10-2001</button>
            </div>
          </div>
          <div className="carousel-item relative">
            <img
              src={len2}
              className="rounded-box"
            />
            <div className="absolute bottom-1 left-1">
              <button className="btn btn-sm btn-primary rounded-xl">17-10-2001</button>
            </div>
          </div>
          <div className="carousel-item relative">
            <img
              src={pindad1}
              className="rounded-box"
            />
            <div className="absolute bottom-1 left-1">
              <button className="btn btn-sm btn-primary rounded-xl">17-10-2001</button>
            </div>
          </div>
          <div className="carousel-item relative">
            <img
              src={practicum1}
              className="rounded-box"
            />
            <div className="absolute bottom-1 left-1">
              <button className="btn btn-sm btn-primary rounded-xl">17-10-2001</button>
            </div>
          </div>
          <div className="carousel-item relative">
            <img
              src={practicum2}
              className="rounded-box"
            />
            <div className="absolute bottom-1 left-1">
              <button className="btn btn-sm btn-primary rounded-xl">17-10-2001</button>
            </div>
          </div>
        </div>
        <div className="text-start md:w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-secondary lg:text-right sm:text-center">
            <code>About Me</code> 🧑🏻‍💻
          </h1>
          <p className="py-4 lg:text-right sm:text-center">
            <code>
              I have recently completed my bachelor's degree in Information
              Systems and have a strong interest in software engineering. My
              goal is to be part of a team that collaborates to achieve common
              goals and makes a positive impact on organizations or companies.
            </code>
          </p>
          <div className="about-document flex gap-3 sm:justify-center lg:justify-end">
            <button className="btn btn-outline btn-primary">
              CV <MdOutlineFileDownload className="text-xl" />
            </button>
            <button className="btn btn-accent">
              Academic Transcript <MdOutlineFileDownload className="text-xl" />
            </button>
            <FaLinkedin className="text-5xl text-blue-400"/>
            <FaGithubSquare className="text-5xl text-purple-500"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
