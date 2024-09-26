import React from "react";
import "./home_body.css";
import { Box, Typography, Button, Divider } from "@mui/material";
import { LA } from "../assets/img";

const Home_body = () => {
  // Function to handle scrolling
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#F0F4F8",
          padding: { xs: "4rem 0", md: "7rem 0" },
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" }, // Stacks vertically on small screens
            justifyContent: "space-between",
            padding: { xs: "2rem", md: "5rem" }, // Responsive padding
            margin: { xs: "0 2rem", md: "0 8rem" }, // Responsive margin
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                color: "text.primary",
              }}
            >
              Hi, I'm Lata Amenu
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
                fontWeight: "bold",
                fontFamily: "sans-serif",
                color: "text.secondary",
                marginTop: "1rem",
              }}
            >
              Front-End Developer
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" }, // Responsive font size
                marginTop: "1.5rem",
                fontWeight: "400",
                lineHeight: "1.6",
                color: "text.primary",
                maxWidth: "600px",
              }}
            >
              I am a Front-end website developer with a deep knowledge of React
              JS. I also possess back-end development skills with Express JS,
              Node JS, and databases such as MongoDB and SQL.
            </Typography>

            {/* Buttons Section */}
            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "1rem",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                sx={{
                  borderRadius: "0.5rem",
                  padding: "1rem 2rem",
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                }}
                onClick={() => handleScroll("contact")}
              >
                HIRE ME
              </Button>
              <Button
                color="secondary"
                variant="contained"
                sx={{
                  borderRadius: "0.5rem",
                  padding: "1rem 2rem",
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                }}
              >
                DOWNLOAD RESUME
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: { xs: "2rem", md: "0" },
            }}
          >
            <img
              width="100%" // Make image responsive
              height="auto" // Maintain aspect ratio
              style={{ maxWidth: "425px", height: "auto" }} // Limit max width
              className="home_right"
              src={LA}
              alt="lata's portfolio"
            />
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,147,233,1) 0%, rgba(255,0,150,1) 100%)", // Gradient background
          height: 4,
          borderRadius: "4px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          margin: "20px 0",
        }}
      />
    </Box>
  );
};

export default Home_body;
