import React from "react";
import Title from "../components/Title";
import { FaBootstrap, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiMysql, SiPhp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function TechStack() {
  return (
    <div className="techstack-page mt-16">
      <div className="techstack-title text-center mb-7">
        <Title value="Tech Stack" />
      </div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>npm i my techstack</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <div className="techstack-content flex justify-center gap-10 text-7xl rounded-lg py-5 sm:flex-cols-4 sm:flex-wrap">
          <div className="react-icon">
            <FaReact className="text-cyan-400" />
          </div>
          <div className="laravel-icon">
            <FaLaravel className="text-red-600" />
          </div>
          <div className="mysql-icon">
            <SiMysql className="text-blue-400" />
          </div>
          <div className="nodejs-icon">
            <FaNodeJs className="text-green-400" />
          </div>
          <div className="javascript-icon">
            <BiLogoJavascript className="text-yellow-400" />
          </div>
          <div className="php-icon">
            <SiPhp className="text-indigo-700" />
          </div>
          <div className="tailwind-icon">
            <RiTailwindCssFill className="text-cyan-500" />
          </div>
          <div className="bootstrap-icon">
            <FaBootstrap className="text-violet-600" />
          </div>
        </div>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
}
