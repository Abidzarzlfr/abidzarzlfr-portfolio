import React from "react";
import profile from "../assets/header/profile-picture.png";
import DownloadButton from "../components/DownloadButton";
import resume from "../assets/download/Resume.pdf";

function Header() {
  return (
    <div className="header-page mt-10">
      <div className="header-content flex justify-between">
        <div className="header-text flex-initial flex-col lg:py-40 lg:ps-20 md:py-20 sm:py-12 text-left w-2/3">
          <p className="header-text-greeting text-7xl md:text-6xl sm:text-5xl mobile:text-4xl font-extrabold">
            <code className="tracking-widest text-primary">Holla!</code>
          </p>
          <p className="header-text-name text-6xl md:text-5xl sm:text-4xl mobile:text-3xl font-bold">
            <code className="tracking-widest">
              I'm, <a className="text-secondary">Abidzar</a>
            </code>
          </p>
          <p className="header-text-footer mt-3 text-lg md:text-md sm:text-sm  mobile:text-xs tracking-widest">
            Welcome to my <b className="text-accent">Portfolio Website.</b>
          </p>
          <DownloadButton
            fileName="Abidzar Zulfa Arifa Kusyono - Resume"
            text="Download Resume"
            style="btn btn-outline btn-primary mt-2 sm:btn-md mobile:btn-xs"
            url={resume}
          />
        </div>
        <div className="header-image flex-initial w-1/3 lg:pe-20">
          <img className="rounded-2xl" src={profile} alt="Profile-Images" />
        </div>
      </div>
    </div>
  );
}

export default Header;
