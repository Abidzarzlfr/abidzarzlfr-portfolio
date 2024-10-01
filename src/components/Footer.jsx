import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-primary p-10 mt-10 rounded-lg">
      <aside>
        <p>
          <a className="text-primary-content font-bold text-lg">
            abidzarzlfr.portfolio
          </a>
          <br />
          <a className="font-bold opacity-60 text-primary-content">
            Software Engineer Enthausiast
          </a>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-primary-content">Contact Me 🙋🏻‍♂️</h6>
        <div className="grid grid-flow-col gap-4 text-4xl bg-neutral-content py-3 px-3 rounded-lg">
          <a>
            <Icon icon="skill-icons:linkedin" className="cursor-alias" />
          </a>
          <a>
            <Icon icon="logos:whatsapp-icon" className="cursor-alias" />
          </a>
          <a>
            <Icon icon="skill-icons:gmail-light" className="cursor-alias" />
          </a>
          <a>
            <Icon icon="skill-icons:github-dark" className="cursor-alias" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
