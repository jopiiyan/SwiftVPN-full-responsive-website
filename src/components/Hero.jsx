import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto mt-[-96px] text-center flex flex-col justify-center">
        <p className="text-[#7655fa] font-bold p-2">Growing with SwiftVPN</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold">
          Grow with Our Fast & Secure VPN
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible, secure for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Gaming", "Netflix", "Browsing", "More..."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-2">
          Feel save whenever you use any type of internet connection with
          SwiftVPN
        </p>
        <button
          className="p-3 border w-[200px] rounded-md font-medium border-none mx-auto border-r- bg-[#7655fa] mt-4 text-black 
         "
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
