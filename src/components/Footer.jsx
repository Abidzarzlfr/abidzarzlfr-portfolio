import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/abidzar-zulfa-arifa-kusyono-0550221ba",
    icon: "skill-icons:linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/6281243700823",
    icon: "logos:whatsapp-icon",
    label: "WhatsApp",
  },
  {
    href: "mailto:abidzarbijeh@gmail.com",
    icon: "skill-icons:gmail-light",
    label: "Gmail",
  },
  {
    href: "https://github.com/Abidzarzlfr",
    icon: "skill-icons:github-dark",
    label: "GitHub",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-primary p-10 mt-10 rounded-lg">
      <aside>
        <p>
          <a href="#" className="text-primary-content font-bold text-lg">
            abidzarzlfr.portfolio
          </a>
          <br />
          <span className="font-bold opacity-60 text-primary-content">
            Software Engineer Enthusiast
          </span>
        </p>
      </aside>

      <nav>
        <h6 className="footer-title text-primary-content">Contact Me 🙋🏻‍♂️</h6>
        <div className="grid grid-flow-col gap-4 text-4xl bg-neutral-content py-3 px-3 rounded-lg">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon icon={icon} className="cursor-alias" />
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
