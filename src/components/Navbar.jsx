import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(!nav);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  px-4 max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-[#4865e6]">SwiftVPN</h1>
      <ul
        className="hidden md:flex cursor-pointer
      "
      >
        <a href="index.html">
          <li className="p-4 border-b border-gray-600">Home</li>
        </a>
        <a href="/">
          <li className="p-4 border-b border-gray-600">Company</li>
        </a>
        <a href="/">
          <li className="p-4 border-b border-gray-600">Resources</li>
        </a>
        <a href="/">
          <li className="p-4 border-b border-gray-600">About</li>
        </a>
        <a href="/">
          <li className="p-4 border-b border-gray-600">Contact</li>
        </a>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] border-r h-full border-r-gray-900  bg-[#000300] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]  "
        }
      >
        <h1 className="w-full m-4 text-3xl font-bold text-[#4865e6]">
          SwiftVPN
        </h1>
        <ul className="p-4 uppercase">
          <a href="index.html">
            <li className="p-4 border-b border-gray-600">Home</li>
          </a>
          <a href="">
            <li className="p-4 border-b border-gray-600">Company</li>
          </a>
          <a href="">
            <li className="p-4 border-b border-gray-600">Resources</li>
          </a>
          <a href="">
            <li className="p-4 border-b border-gray-600">About</li>
          </a>

          <a href="">
            <li className="p-4">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
