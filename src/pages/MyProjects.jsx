import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";

// Project Images
import Fitclub from "../assets/mockup/fitclub-mockup.png";
import Kelontong from "../assets/mockup/kelontong-mockup.png";
import Sapatuku from "../assets/mockup/sapatuku-mockup.png";
import Restaurant from "../assets/mockup/restaurant-mockup.png";
import Pelita from "../assets/mockup/pelita-mockup.jpg";
import Portfolio from "../assets/mockup/portfolio-mockup.png";
import ScreenshotTools from "../assets/mockup/screenshot-tools-mockup.png";

// Icons
import { FaBootstrap, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiMysql, SiPhp, SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function MyProjects() {
  // Technology Icons
  const icons = {
    react: <FaReact className="text-3xl text-cyan-400" />,
    node: <FaNodeJs className="text-3xl text-green-400" />,
    js: <BiLogoJavascript className="text-3xl text-yellow-400" />,
    laravel: <FaLaravel className="text-3xl text-red-600" />,
    php: <SiPhp className="text-3xl text-indigo-300" />,
    bootstrap: <FaBootstrap className="text-3xl text-violet-600" />,
    mysql: <SiMysql className="text-3xl text-blue-400" />,
    vite: <SiVite className="text-3xl text-yellow-300" />,
    tailwind: <RiTailwindCssFill className="text-3xl text-cyan-500" />,
  };

  const projects = [
    {
      img: ScreenshotTools,
      title: "Screenshot Tools Features (Web-Based)",
      body: "Fitclub is a website that provides workout movement references using an API as its main data source. The purpose of creating this website is to assist the community in selecting appropriate movements when exercising at the gym or at home.",
      icons: [icons.react, icons.node, icons.js],
      url: "https://fitclub-id-abidzarzlfr.netlify.app/"
    },
    {
      img: Fitclub,
      title: "Gym Exercise Website",
      body: "Fitclub is a website that provides workout movement references using an API as its main data source. The purpose of creating this website is to assist the community in selecting appropriate movements when exercising at the gym or at home.",
      icons: [icons.react, icons.node, icons.js],
      url: "https://fitclub-id-abidzarzlfr.netlify.app/"
    },
    {
      img: Pelita,
      title: "Toddler Health Website",
      body: "A recent project I worked on was my final thesis during university, where I developed the 'PELITA' website. This website was designed to help parents care for their children, particularly toddlers, to reduce the rates of stunting, wasting, and underweight in Indonesia.",
      icons: [icons.laravel, icons.php, icons.mysql, icons.bootstrap],
      url: "https://github.com/Abidzarzlfr/PELITA-V2"
    },
    {
      img: Portfolio,
      title: "Portfolio Website",
      body: "This website was developed as my digital portfolio, containing information about myself, my CV, academic transcript, social media, technologies I am proficient in, and several highlights of projects I have worked on in software engineering, particularly in web development.",
      icons: [icons.react, icons.node, icons.js, icons.tailwind],
      url: ""
    },
    {
      img: Restaurant,
      title: "Open Source Restaurant Website",
      body: "This restaurant website promotes a restaurant called Gericht. My work involved implementing the existing open-source design using React.js.",
      icons: [icons.react, icons.node, icons.js],
      url: "https://restaurant-abidzar.netlify.app/"
    },
    {
      img: Kelontong,
      title: "Grocery Store Website",
      body: "Kelontong is a digital platform that provides information about traditional small grocery stores in Indonesia. It supports micro and macro economies by enhancing SME competitiveness in the retail sector.",
      icons: [icons.laravel, icons.php, icons.mysql, icons.bootstrap],
      url: "https://github.com/SI-RPL-2023/SI4404_KEL243_KELONTONG"
    },
    {
      img: Sapatuku,
      title: "Shoe Shop Website",
      body: "Sapatuku was a task for a web application development course at Telkom University. It is a buy-and-sell website for boot enthusiasts.",
      icons: [icons.vite, icons.bootstrap],
      url: "https://sapatuku.netlify.app/"
    },
  ];

  return (
    <div className="myprojects-page mt-16">
      <div className="myprojects-title text-center mb-10">
        <Title value="My Projects" />
      </div>
      <div className="myprojects-content flex-wrap flex gap-x-8 gap-y-4 flex-cols-3 justify-center">
        {projects.map((project, index) => (
          <Card
            key={index}
            img={project.img}
            title={project.title}
            body={project.body}
            firstIcon={project.icons[0]}
            secondIcon={project.icons[1]}
            thirdIcon={project.icons[2]}
            fourthIcon={project.icons[3]}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
