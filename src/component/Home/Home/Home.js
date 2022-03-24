import ParticlesBg from "particles-bg";
import React from "react";
import About from "../../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Main />
      <Contact />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
};

export default Home;
