import React, { useState } from "react";
import Browsing from "../images/browsing.svg";
import PrivateData from "../images/private.svg";
import Gaming from "../images/gaming.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Analytics = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] w-full mx-auto grid md:grid-cols-2">
          <img src={Browsing} className="w-[90%] mx-auto my-4" alt="browsing" />
          <div className="flex flex-col justify-center">
            <p className=" text-[#7655fa] font-bold text-xl md:text-2xl ">
              SwiftVPN Details
            </p>
            <h1 className="font-bold text-3xl md:text-4xl py-2">
              Ensuring Your Privacy
            </h1>
            <p className="">
              We add security and anonymity to you when you connect to web-based
              services and sites. We also hide your actual public IP address and
              tunnels traffic between your device and the remote server.
            </p>
            <button
              className="p-3 border w-[200px] rounded-md font-medium border-none mx-auto bg-[black] mt-4 text-[#7655fa] 
         hover:bg-[#7655fa] hover:text-white transition-all ease-in-out duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[black] py-16 px-4 text-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            src={PrivateData}
            className="w-[90%] mx-auto my-4 block md:hidden"
            alt="browsing"
          />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-3xl md:text-4xl py-2">
              Instant online protection
            </h1>
            <p className="">
              Take charge of your digital security in one click. SwiftVPN’s
              best-in-class encryption keeps you safe and private on any
              network.
            </p>
            <button
              className="p-3 border w-[200px] rounded-md font-medium border-none mx-auto border-r- bg-[white] mt-6 text-[#7655fa] 
         hover:bg-[#7655fa] hover:text-white transition-all ease-in-out duration-300 "
            >
              Get SwiftVPN
            </button>
          </div>
          <img
            src={PrivateData}
            className="w-[90%] mx-auto my-4 hidden md:block"
            alt="browsing"
          />
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={Gaming} className="w-[90%] mx-auto my-4" alt="browsing" />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-3xl md:text-4xl py-2">
              Fast and Secure
            </h1>
            <p className="">
              Level up your gaming security on any public Wi-Fi with our fast
              and secure VPN. Play without worries, wherever you are!
            </p>
            <button
              className="p-3 border w-[200px] rounded-md font-medium border-none mx-auto border-r- bg-[black] mt-4 text-[#7655fa] 
         hover:bg-[#7655fa] hover:text-white transition-all ease-in-out duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[black] text-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <h1 className="font-extrabold text-transparent text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-[#cfcfcf] to-purple-700">
            Enter Your Redemption Code
          </h1>
          <div className="flex justify-center max-w-[500px] mt-6 md:mt-0">
            <input
              className="flex-1 text-2xl outline-none text-start font-bold p-3 z-50 text-black"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Redemption Code"
            />
            <button className="font-bold bg-[#7655fa] w-full max-w-[30%] lg:max-w-[20%]  hover:bg-[#6c4fe3] active:bg-[#553eb1] active:text-black ">
              Enter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
