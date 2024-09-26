import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "./DrawerComponent";

const Header = () => {
  const [value, setValue] = useState(0); // Default selected tab index
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Experiences", id: "experiences" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  // Function to handle scrolling
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFFFFF", // Set the background to white
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for depth
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "1.5rem", // Increased font size for the name
              fontWeight: "bold",
              color: "#063970", // Dark text for contrast
              paddingLeft: "10%", // Left padding
            }}
          >
            Lata Amenu
          </Typography>
          {isMatch ? (
            <DrawerComponent />
          ) : (
            <Tabs
              sx={{ marginLeft: "auto", paddingRight: "10%" }} // Added padding to the right
              textColor="primary" // Change text color for better visibility
              value={value}
              onChange={(e, newValue) => setValue(newValue)} // Fixed state update
              indicatorColor="primary" // Match the indicator color with text color
            >
              {PAGES.map((page, index) => (
                <Tab
                  key={index}
                  label={page.label}
                  sx={{
                    fontWeight: "medium", // Medium font weight
                    color: "#063970", // Tab text color
                    "&:hover": {
                      color: "#FF5722", // Change color on hover
                    },
                  }}
                  onClick={() => handleScroll(page.id)} // Call scroll function
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
