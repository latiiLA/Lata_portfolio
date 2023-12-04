import React from "react";
// import Header from "../header/Header";
import Home_body from "../Home_body";
import Projects from "../../pages/Projects";
import Contact_me from "../../pages/Contact_me";
import Socials from "../Socials";
import Header from "../Header";
import { Box } from "@mui/material";
import About from "../About";
import EduTimeline from "../EduTimeline";
import Skills from "../../pages/Skills";

const Home = () => {
  return (
    <Box className="home-container">
      {/* <Header /> */}
      <Header />
      <Home_body />
      {/* <About /> */}
      <Skills />
      <EduTimeline />

      <Projects />
      <Contact_me />
      <Socials />
    </Box>
  );
};

export default Home;
