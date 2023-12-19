import React from "react";
import Accordion from "./Accordion";
import FAQ from "./FAQ";

const AccordionTitle = ({ title }) => {
  return (
    <div className="py-2 bg-black text-white justify-center border-b-2 border-b-gray-700 px-4 ">
      <h1 className="text-3xl sm:text-4xl  text-center mt-4 font-extrabold">
        {title}
      </h1>
      <FAQ></FAQ>
    </div>
  );
};

export default AccordionTitle;
