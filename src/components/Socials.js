import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa", // Changed to a lighter background
        padding: "1rem 0", // Reduced padding
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#333", // Changed text color for better visibility
          marginBottom: "1rem", // Reduced margin
        }}
      >
        Connect with Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem", // Reduced gap between icons
        }}
      >
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/latiila/"
          aria-label="LinkedIn"
          sx={{ color: "#333", "&:hover": { color: "#0077b5" } }} // Changed hover color for better visibility
        >
          <FontAwesomeIcon icon={faLinkedin} fontSize="1.5rem" />
        </IconButton>
        <IconButton
          component="a"
          href="https://t.me/latiila/"
          aria-label="Telegram"
          sx={{ color: "#333", "&:hover": { color: "#0088cc" } }}
        >
          <FontAwesomeIcon icon={faTelegram} fontSize="1.5rem" />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/latiiLA"
          aria-label="GitHub"
          sx={{ color: "#333", "&:hover": { color: "#333" } }}
        >
          <FontAwesomeIcon icon={faGithub} fontSize="1.5rem" />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          aria-label="Instagram"
          sx={{ color: "#333", "&:hover": { color: "#e1306c" } }}
        >
          <FontAwesomeIcon icon={faInstagram} fontSize="1.5rem" />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/latiilab/"
          aria-label="Twitter"
          sx={{ color: "#333", "&:hover": { color: "#1da1f2" } }}
        >
          <FontAwesomeIcon icon={faTwitter} fontSize="1.5rem" />
        </IconButton>
        <IconButton
          component="a"
          href="https://Youtube.com"
          aria-label="YouTube"
          sx={{ color: "#333", "&:hover": { color: "#ff0000" } }}
        >
          <FontAwesomeIcon icon={faYoutube} fontSize="1.5rem" />
        </IconButton>
      </Box>
      <Typography
        sx={{
          color: "#333",
          marginTop: "1rem",
          fontSize: "0.8rem", // Reduced font size
        }}
      >
        &copy; 2023 Lata, All rights reserved.
      </Typography>
    </Box>
  );
};

export default Socials;
