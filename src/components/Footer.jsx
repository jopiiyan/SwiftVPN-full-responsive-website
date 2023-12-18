import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
      <div className="w-[90%]">
        <h1 className="w-full] text-3xl font-bold text-[#4865e6]">SwiftVPN</h1>

        <p className="py-4 ">
          Secure your online presence with our reliable VPN service. Protect
          your data, maintain privacy, and access content from anywhere in the
          world. Experience fast and encrypted connections for a safer digital
          experience.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="/">
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="
https://www.instagram.com/jopiiyan?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr

"
            target="_blank"
          >
            <FaInstagram size={30} />
          </a>
          <a href="/">
            <FaTwitterSquare size={30} />
          </a>
          <a
            href="https://github.com/jopiiyan?tab=repositories"
            target="_blank"
          >
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
      <div className=" flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400 ">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer ">
              Analytics
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Marketing
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Commerce
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Pricing
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Documentation
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Guides
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 ">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              About
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Blog
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Jobs
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Press
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Claim
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Policy
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
