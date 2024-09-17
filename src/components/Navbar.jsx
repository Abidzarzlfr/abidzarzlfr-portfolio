import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-primary rounded-lg text-primary-content sticky top-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-medium tracking-wide bg-primary text-primary-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>my projects</a>
            </li>
            <li>
              <a>contact me</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">abidzarzlfr.portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium tracking-wide">
          <li>
            <a>my projects</a>
          </li>
          <li>
            <a>contact me</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <input type="checkbox" className="toggle toggle-lg" defaultChecked />
      </div>
    </div>
  );
};

export default Navbar;
