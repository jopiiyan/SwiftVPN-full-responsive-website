import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  );
};

export default App;
