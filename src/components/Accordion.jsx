import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 bg-black text-white justify-center lg:px-40  px-4 ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full px-2 py-3 mt-10 rounded-lg hover:bg-gray-900 transition-all ease-in-out duration:500 items-center"
      >
        <span className="font-bold text-xl sm:text-2xl">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className={`fill-indigo-500 transition-transform duration-300 transform  ${
            accordionOpen && "rotate-180"
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.41421L2.70711 7.70711C2.31658 8.09763 1.68342 8.09763 1.29289 7.70711C0.902371 7.31658 0.902371 6.68342 1.29289 6.29289L8 0.585787L14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711C14.3166 8.09763 13.6834 8.09763 13.2929 7.70711L8 2.41421Z"
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm mt-2 ${
          accordionOpen
            ? "grid-[1fr] opacity-100"
            : "grid-rows-[0fr] transition-all ease-in-out duration-500 opacity-0"
        }`}
      >
        <div className="overflow-hidden text-white px-2 text-sm">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
