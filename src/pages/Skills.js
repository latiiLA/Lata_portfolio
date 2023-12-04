import React from "react";
import "../components/skills.css";
import Backend from "../components/Back_End_Skills";
import Frontend from "./../components/Front_End_Skills";
import { Box } from "@mui/material";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
      </Box>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
