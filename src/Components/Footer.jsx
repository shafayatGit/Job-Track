import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer rounded-t-lg flex items-center justify-around  bg-neutral text-neutral-content p-10 mulish  ">
        <div>
          <div className="flex items-center gap-1 ">
            <img
              className="w-10 h-10 lg:w-16 lg:h-16"
              src="https://i.ibb.co.com/Ps3m36sZ/sticker.webp"
              alt=""
            />
            <NavLink
              to={"/"}
              className="cursor-pointer text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 font-semibold"
            >
              JobTrack
            </NavLink>
          </div>
          <div className="text-base font-medium text-white text-center flex flex-col gap-3 mt-3">
            <p className="text-[18px] mulish">
              Email:{" "}
              <a className="text-purple-500" href="/">
                {" "}
                support@jobtracksite.com
              </a>
            </p>
            <p className="text-white mulish">Phone: +1 800 123 4567</p>
          </div>
        </div>
        <p>
          Follow us on{" "}
          <div className="flex justify-center gap-2 mt-3 mb-18">
            <a
              target="blank_"
              href="https://www.linkedin.com/in/shafayat-hossain-patowary/"
            >
              <FaLinkedin size={25}></FaLinkedin>
            </a>{" "}
            |{" "}
            <a target="blank_" href="https://github.com/shafayatGit">
              <FaGithub size={25}></FaGithub>
            </a>
          </div>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
