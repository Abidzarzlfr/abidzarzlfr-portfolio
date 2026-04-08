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
import Epakta from "../assets/mockup/epakta-mockup.png";
import Presensi from "../assets/mockup/presensi.png";
import TmHealth from "../assets/mockup/tmhealth-mockup.png";
import Egc from "../assets/mockup/egc-mockup.png";
import Physionext from "../assets/mockup/physionext-mockup.png";
import Posyandu from "../assets/mockup/posyandu-mockup.png";

// Icons
import { FaBootstrap, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiMysql, SiPhp, SiVite, SiNestjs, SiN8N } from "react-icons/si";
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
    nest: <SiNestjs className="text-3xl text-red-500"/>,
    n8n: <SiN8N className="text-3xl text-red-400"/>
  };
  const projects = [
    {
      img: Posyandu,
      title: "Posyandu (Web-Based)",
      body: "Posyandu511 is a freelance project developed to support community healthcare services for Posyandu 511 Kemuning Yonif in Blitar. The website features a primary tool for calculating child growth indicators such as stunting, wasting, and overweight, based on Indonesian KMS standards and WHO data comparisons. It also includes additional features like health news, information updates, and online registration. The platform has received positive feedback for its usefulness in promoting better health monitoring within the community.",
      icons: [icons.laravel, icons.php, icons.js, icons.tailwind],
      url: "https://posyandu511.com/"
    },
    {
      img: Egc,
      title: "Employee Get Customer (EGC) (Web-Based)",
      body: "The Employee Get Customer (EGC) platform is a full-stack web application designed to empower employees to contribute to company revenue through product referrals and sales. Developed end-to-end, this system provides a structured affiliate mechanism that tracks employee contributions and rewards them accordingly. The platform received direct appreciation from the Board of Directors, highlighting its impact and value in driving internal sales initiatives.",
      icons: [icons.laravel, icons.node, icons.js, icons.nest, icons.tailwind],
      url: "https://egc.telkomedika.com/"
    },
    {
      img: Physionext,
      title: "Physionext (Web-Based)",
      body: "PhysioNext is a dedicated website for Telkomedika’s physiotherapy product line, developed to facilitate product promotion and sales. The platform is integrated with the Employee Get Customer (EGC) system, allowing employees to participate in an affiliate program and earn incentives through successful referrals. Built with modern web technologies, this website focuses on delivering a user-friendly experience while supporting business growth through both direct and affiliate-based sales.",
      icons: [icons.laravel, icons.node, icons.js, icons.nest, icons.tailwind],
      url: "https://physionext.telkomedika.com/"
    },
    {
      img: Presensi,
      title: "Presensi (Web-Based)",
      body: "The Presensi platform is a modern web-based attendance system for Telkomedika, built with Laravel, JavaScript, and Tailwind CSS, featuring AI-powered chatbot and intelligent agents that enable HR and management to monitor and analyze data in real time with ease; enhanced by HR-controlled geolocation to prevent attendance fraud and reinforced with robust security, it delivers a smart, secure, and highly efficient workforce management solution.",
      icons: [icons.laravel, icons.php, icons.tailwind],
      url: "https://newpresensi.telkomedika.com/"
    },
    {
      img: TmHealth,
      title: "TMHealth (Web-Based)",
      body: "TM Health is a digital business platform designed to support the sale of Telkomedika’s healthcare products, such as wellness programs and medical check-ups (MCU). Developed using Laravel, Node.js, JavaScript, and Tailwind CSS, the platform enables seamless online transactions and enhances the company’s ability to generate revenue through digital channels. It serves as a scalable solution for expanding Telkomedika’s healthcare services in the online market.",
      icons: [icons.laravel, icons.node, icons.js, icons.nest, icons.tailwind],
      url: "https://tmhealth.telkomedika.com/"
    },
    {
      img: Epakta,
      title: "Electronic Pakta Integritas (Web-Based)",
      body: "The e-Pakta platform is an integrity pact management system developed for Telkomedika, built using Laravel, JavaScript, and Tailwind CSS. This application streamlines the process of collecting and managing integrity pact submissions, enabling employees to easily fill out and submit their commitments digitally. The system significantly improves efficiency, data organization, and accessibility for the company’s internal compliance processes.",
      icons: [icons.laravel, icons.php, icons.tailwind],
      url: "https://e-pakta.telkomedika.com/"
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
