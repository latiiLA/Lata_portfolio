import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home"; // Add icons as needed
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const PAGES = [
    { name: "Home", id: "home", icon: <HomeIcon /> },
    { name: "Skills", id: "skills", icon: <InfoIcon /> },
    { name: "Experiences", id: "experiences", icon: <InfoIcon /> },
    { name: "Services", id: "services", icon: <BuildIcon /> },
    { name: "Portfolio", id: "portfolio", icon: <FolderIcon /> },
    { name: "Projects", id: "projects", icon: <WorkIcon /> },
    { name: "Contact", id: "contact", icon: <ContactMailIcon /> },
  ];

  // Function to handle scrolling
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpenDrawer(false);
  };

  return (
    <div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#FFFFFF", // White background for the drawer
            width: "250px", // Fixed width
            padding: "16px", // Padding for content
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
          },
        }}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton
              key={index}
              onClick={() => handleScroll(page.id)} // Close drawer on click
              sx={{
                "&:hover": {
                  backgroundColor: "#f0f0f0", // Hover effect
                },
              }}
            >
              <ListItemIcon sx={{ color: "#063970" }}>{page.icon}</ListItemIcon>
              <ListItemText primary={page.name} sx={{ color: "#063970" }} />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ margin: "8px 0" }} />
        <Box textAlign="center">
          <p style={{ color: "#063970", margin: 0 }}>© 2023 Lata Amenu</p>
        </Box>
      </Drawer>
      <Box>
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{
            color: "#063970",
            backgroundColor: "#ffffff",
            borderRadius: "50%", // Circular button
            "&:hover": {
              backgroundColor: "#e0e0e0", // Button hover effect
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default DrawerComponent;
