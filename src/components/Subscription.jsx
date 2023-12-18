import React from "react";
import { IoCalendarNumber } from "react-icons/io5";
import Year from "../images/year.png";
import Years from "../images/5Year.png";

const Subscription = () => {
  return (
    <div className="w-full bg-white grid md:grid-cols-3 py-[10rem] px-4 gap-8">
      <div
        className=" max-w-[1240px] flex flex-col mx-auto shadow-xl w-full rounded-[20px] hover:shadow-2xl hover:scale-105 items-center justify-center py-4 gap-4 transition-all ease-in-out duration-300
     "
      >
        {
          <IoCalendarNumber
            className=" w-[10rem] h-[7rem] "
            alt="single"
          ></IoCalendarNumber>
        }
        <div className="flex flex-col mx-auto justify-center items-center ">
          <h2 className="font-bold mx-auto text-2xl md:text-3xl">
            Single User
          </h2>
          <h1 className="text-2xl md:text-3xl font-extrabold ">$2.12</h1>
          <p className="border-b w-full text-center border-b-gray-500">
            1 Month
          </p>
          <p className="border-b w-full border-b-gray-500">
            Access to 50+ Countries
          </p>
          <p className="border-b w-full text-center border-b-gray-500 ">
            Fast Connection
          </p>
          <button className=" mt-6 font-bold bg-[#6c4fe3] w-full max-w-[90%] rounded-[30px] p-3 active:bg-[#553eb1] active:text-black">
            Subscribe
          </button>
        </div>
      </div>
      <div
        className=" max-w-[1240px] flex flex-col mx-auto shadow-xl w-full rounded-[20px] hover:shadow-2xl hover:scale-105 items-center justify-center py-4 gap-4 transition-all ease-in-out duration-300
        
     "
      >
        <img src={Year} className=" w-[6.5rem]" alt="single" />
        <div className="flex flex-col mx-auto justify-center items-center ">
          <h2 className="font-bold mx-auto text-2xl md:text-3xl">
            Single User
          </h2>
          <h1 className="text-2xl md:text-3xl font-extrabold">$9.90</h1>
          <p className="border-b w-full text-center border-b-gray-500">
            1 Year
          </p>
          <p className="border-b w-full text-center border-b-gray-500">
            Access to 100+ Countries
          </p>
          <p className="border-b w-full text-center border-b-gray-500 ">
            Fast Connection
          </p>
          <button className=" mt-6 font-bold bg-[#6c4fe3] w-full max-w-[90%] rounded-[30px] p-3 active:bg-[#553eb1] active:text-black">
            Subscribe
          </button>
        </div>
      </div>
      <div
        className=" max-w-[1240px] flex flex-col mx-auto shadow-xl w-full rounded-[20px] hover:shadow-2xl hover:scale-105 items-center justify-center py-4 gap-4 transition-all ease-in-out duration-300
        
     "
      >
        <img src={Years} className=" w-[6.5rem]" alt="single" />
        <div className="flex flex-col mx-autojustify-center items-center ">
          <h2 className="font-bold mx-auto text-2xl md:text-3xl">
            Single User
          </h2>
          <h1 className="text-2xl md:text-3xl font-extrabold">$18.90</h1>
          <p className="border-b w-full text-center border-b-gray-500">
            5 Years
          </p>
          <p className="border-b w-full text-center border-b-gray-500">
            Access to 100+ Countries
          </p>
          <p className="border-b w-full text-center border-b-gray-500 ">
            Fast Connection
          </p>
          <button className=" mt-6 font-bold bg-[#6c4fe3] w-full max-w-[90%] rounded-[30px] p-3 active:bg-[#553eb1] active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
