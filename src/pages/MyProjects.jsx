import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import Fitclub from "../assets/myProjects/fitclub-mockup.png";
import Kelontong from "../assets/myProjects/kelontong-mockup.png";
import Sapatuku from "../assets/myProjects/sapatuku-mockup.png";
import Restaurant from "../assets/myProjects/restaurant-mockup.png";
import Pelita from "../assets/myProjects/pelita-mockup.jpg";
import Pentiing from "../assets/myProjects/pentiing-mockup.png";
import Portfolio from "../assets/myProjects/portfolio-mockup.png";
import { FaBootstrap, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiMysql, SiPhp, SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function MyProjects() {
  const reactIcon = <FaReact className="text-3xl text-cyan-400" />;
  const nodeIcon = <FaNodeJs className="text-3xl text-green-400" />;
  const jsIcon = <BiLogoJavascript className="text-3xl text-yellow-400" />;
  const laravelIcon = <FaLaravel className="text-3xl text-red-600" />;
  const phpIcon = <SiPhp className="text-3xl text-indigo-300" />;
  const bootstrapIcon = <FaBootstrap className="text-3xl text-violet-600" />;
  const mysqlIcon = <SiMysql className="text-3xl text-blue-400" />;
  const viteIcon = <SiVite className="text-3xl text-yellow-300" />;
  const tailwindIcon = <RiTailwindCssFill className="text-3xl text-cyan-500" />;

  return (
    <div className="myprojects-page mt-16">
      <div className="myprojects-title text-center mb-10">
        <Title value="My Projects" />
      </div>
      <div className="myprojects-content flex-wrap flex gap-x-8 gap-y-4 flex-cols-3 justify-center">
        <Card
          img={Fitclub}
          title={"Gym Exercise Website"}
          firstIcon={reactIcon}
          secondIcon={nodeIcon}
          thirdIcon={jsIcon}
        />
        <Card
          img={Pelita}
          title={"Toodler Health Website"}
          firstIcon={laravelIcon}
          secondIcon={phpIcon}
          thirdIcon={mysqlIcon}
          fourthIcon={bootstrapIcon}
        />
        <Card
          img={Portfolio}
          title={"Portfolio Website"}
          firstIcon={reactIcon}
          secondIcon={nodeIcon}
          thirdIcon={jsIcon}
          fourthIcon={tailwindIcon}
        />
        <Card
          img={Restaurant}
          title={"Open Source Restaurant Website"}
          firstIcon={reactIcon}
          secondIcon={nodeIcon}
          thirdIcon={jsIcon}
        />
        <Card
          img={Kelontong}
          title={"Grocery Store Website"}
          firstIcon={laravelIcon}
          secondIcon={phpIcon}
          thirdIcon={mysqlIcon}
          fourthIcon={bootstrapIcon}
        />
        <Card
          img={Sapatuku}
          title={"Shoe Shop Website"}
          firstIcon={viteIcon}
          secondIcon={bootstrapIcon}
        />
        <Card
          img={Pentiing}
          title={"Parenting Website"}
          firstIcon={laravelIcon}
          secondIcon={phpIcon}
          thirdIcon={mysqlIcon}
          fourthIcon={bootstrapIcon}
        />
      </div>
    </div>
  );
}
