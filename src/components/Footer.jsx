import React from "react";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
  RiCopyrightLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20 relative">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-500 p-8">
        {/**Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-footer text-white"
          >
            Power<span className="text-primary text-5xl">.</span>{" "}
          </a>
        </div>
        {/**Social media */}
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="block bg-primary rounded-full text-white p-4">
              <RiInstagramLine />
            </a>
          </li>
          <li>
            <a href="#" className="block bg-primary rounded-full text-white p-4">
              <RiFacebookLine/>
            </a>
          </li>
          <li>
            <a href="#" className="block bg-primary rounded-full text-white p-4">
              <RiTwitterLine />
            </a>
          </li>
          <li>
            <a href="#" className="block bg-primary rounded-full text-white p-4">
              <RiGithubLine />
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white">Company</h3>
        <nav className="mt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">Press</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">Investors</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">Events</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">Terms of use</a>
            <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">Privacy policy</a>
            <button
              type="submit"
              className="font-semibold py-2 px-6 bg-primary text-white rounded-xl"
            >Contact Us</button>
        </nav>
      </div>
      <div className="mt-20 text-gray-400 text-center">
        <p>© jdflik 2023 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
