import React from "react";
import "./projects.css";
import ProjectCard from "../components/Project_Card";
import { Box, Button, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="project_selector_section">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <RemoveIcon></RemoveIcon>
            <Typography
              sx={{ color: "#000", fontSize: "2rem", fontWeight: "bold" }}
            >
              My Projects
            </Typography>
            <RemoveIcon></RemoveIcon>
          </IconButton>
        </Box>
        <div className="achievements">
          Some achivements made in my previous education and/or in my personal
          projects
        </div>
        <div className="radio_btn_group">
          <label>
            <input type="radio" name="project_radio_bts" value="All"></input>
            All Projects
          </label>
          <label>
            <input
              type="radio"
              name="project_radio_bts"
              value="Web_development"
            ></input>
            Web Development
          </label>
          <label>
            <input
              type="radio"
              name="project_radio_bts"
              value="Web_design"
            ></input>
            Web Design
          </label>
          <label>
            <input type="radio" name="project_radio_bts" value="Others"></input>
            Others
          </label>
        </div>
      </div>
      <div className="project_cards">
        <ProjectCard />
      </div>
      <Button
        variant="contained"
        color="primary"
        sx={{ padding: "0.5rem", borderRadius: "0.5rem", fontWeight: "bold" }}
      >
        View All Works
      </Button>

      <div className="project_buttom_section">
        <div className="left_section">
          <img href="#"></img>
        </div>
        <div className="right_section">
          <h4>LET'S WORK TOGETHER</h4>
          <h6>I am available for freelance work</h6>
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            marginBottom: "5rem",
          }}
        >
          GET IN TOUCH
        </Button>
      </div>
    </div>
  );
};

export default Projects;
