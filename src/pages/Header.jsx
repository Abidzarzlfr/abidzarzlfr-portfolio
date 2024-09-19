import React from "react";
import profile from "../assets/profile-picture.png";
import { MdOutlineFileDownload } from "react-icons/md";

function Header() {
  return (
    <div className="header-page mt-10">
      <div className="header-content flex justify-between">
        <div className="header-text flex-initial flex-col py-44 text-left w-2/3">
          <p className="header-text-greeting text-7xl font-extrabold">
            <code className="tracking-widest text-primary">Holla!</code>
          </p>
          <p className="header-text-name text-6xl font-bold">
            <code className="tracking-widest">
              I'm, <a className="text-secondary">Abidzar</a>
            </code>
          </p>
          <p className="header-text-footer mt-3 text-lg tracking-widest">
            Welcome to my <b className="text-accent">Portfolio Website.</b>
          </p>
          <button className="btn btn-outline btn-primary mt-2">
            Download CV <MdOutlineFileDownload className="text-xl"/>
          </button>
        </div>
        <div className="header-image flex-initial w-1/3">
          <img className="rounded-2xl" src={profile} alt="Profile-Images" />
        </div>
      </div>
    </div>
  );
}

export default Header;
