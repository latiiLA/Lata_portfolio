import React from "react";
import "./projects.css";
import ProjectCard from "../components/Project_Card";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const Projects = () => {
  return (
    <div id="projects">
      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        {" "}
        {/* Reduced marginBottom */}
        <IconButton disableRipple>
          <RemoveIcon sx={{ color: "#0693e3", fontSize: "2rem" }} />
          <Typography
            sx={{
              color: "#000",
              fontSize: "2.5rem",
              fontWeight: "bold",
              margin: "0 10px", // Reduced side margins
            }}
          >
            My Projects
          </Typography>
          <RemoveIcon sx={{ color: "#0693e3", fontSize: "2rem" }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: "1.2rem",
            color: "#555",
            marginBottom: "15px", // Reduced marginBottom
          }}
        >
          Some achievements made during my education and personal projects
        </Typography>
      </Box>

      <Box sx={{ marginX: 10, marginBottom: "30px" }}>
        <ProjectCard />
      </Box>

      <Divider
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,147,233,1) 0%, rgba(255,0,150,1) 100%)",
          height: 3,
          borderRadius: "2px",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)",
          margin: "20px 0",
        }}
      />

      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff", // Light background for contrast
            borderRadius: "20px", // More rounded corners for a modern look
            boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.1)", // Softer shadow for depth
            padding: "30px", // More padding for spacious feel
            marginBottom: "4rem", // Increased margin for better separation
            transition: "box-shadow 0.3s ease-in-out", // Smooth shadow transition
            "&:hover": {
              boxShadow: "0px 16px 30px rgba(0, 0, 0, 0.2)", // Slightly stronger shadow on hover
            },
            marginX: 13,
          }}
        >
          <Box sx={{ width: "40%" }}>
            {/* Online image */}
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdvcmstaW1hZ2V8ZW58MHx8fHwxNjE3MjczNTYy&ixlib=rb-1.2.1&q=80&w=400"
              alt="Work Together"
              style={{
                width: "100%",
                borderRadius: "20px", // Rounded image for a cohesive look
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)", // Soft shadow around the image
              }}
            />
          </Box>

          <Box sx={{ textAlign: "right", width: "50%" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px", // Added margin for better separation
                color: "#333", // Darker color for better contrast
              }}
            >
              LET'S WORK TOGETHER
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                marginBottom: "20px",
                color: "#777", // Softer subtitle color for contrast
                fontSize: "1.1rem", // Slightly larger font for better readability
              }}
            >
              I am available for freelance work
            </Typography>

            <Button
              variant="contained"
              sx={{
                padding: "0.75rem 2rem", // Larger padding for a bigger button
                borderRadius: "30px", // Fully rounded button
                fontWeight: "bold",
                fontSize: "1rem", // Larger text for emphasis
                backgroundColor: "#0693e3",
                color: "#fff",
                transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth transitions
                "&:hover": {
                  backgroundColor: "#057cc3",
                  transform: "translateY(-3px)", // Slightly raise the button on hover
                },
              }}
            >
              GET IN TOUCH
            </Button>
          </Box>
        </Box>
      </div>
      <Divider
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,147,233,1) 0%, rgba(255,0,150,1) 100%)",
          height: 3,
          borderRadius: "2px",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)",
          margin: "20px 0",
        }}
      />
    </div>
  );
};

export default Projects;
