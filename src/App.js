import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import AccordionFull from "./components/AccordionFull";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Subscription></Subscription>
      <AccordionFull title={"  Frequently Asked Questions"}></AccordionFull>
      <Footer></Footer>
    </div>
  );
};

export default App;
