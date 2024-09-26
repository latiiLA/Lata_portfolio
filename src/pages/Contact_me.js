import React from "react";
import "./contact_me.css";
import Contact from "../components/Contact";
import { Box, IconButton, Typography, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const Contact_me = () => {
  return (
    <Box id="contact" sx={{ background: "#F0F4F8", padding: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <RemoveIcon sx={{ color: "#0693e3" }} />
          </IconButton>
          <Typography
            sx={{ color: "#000", fontSize: "2rem", fontWeight: "bold" }}
          >
            CONTACT ME
          </Typography>
          <IconButton>
            <RemoveIcon sx={{ color: "#0693e3" }} />
          </IconButton>
        </Box>
        <Typography
          sx={{ textAlign: "center", marginBottom: "2rem", color: "#555" }}
        >
          If you like my work, or you just want to contact me, do not hesitate
          to send me an email by this form.
        </Typography>

        {/* Contact Form Component */}
        <Contact />
      </Box>
    </Box>
  );
};

export default Contact_me;
