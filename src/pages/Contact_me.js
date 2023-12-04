import React from "react";

import "./contact_me.css";

import Contact from "../components/Contact";

import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const Contact_me = () => {
  return (
    <Box sx={{ background: "#C8E7F5", paddingBottom: "2rem" }}>
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
            <RemoveIcon></RemoveIcon>
            <Typography
              sx={{ color: "#000", fontSize: "2rem", fontWeight: "bold" }}
            >
              CONTACT ME
            </Typography>
            <RemoveIcon></RemoveIcon>
          </IconButton>
        </Box>
        <Typography>
          If you like my work, or you just want to contact me, do not hesitate
          to send me an email by this form
        </Typography>
      </Box>
      {/* <div className="contact_body_section">
        <div>
          <form className="form_container">
            <div className="form_input_section">
              <Input placeholder="Enter Name"></Input>
              <Input placeholder="Enter Email"></Input>
              <Input placeholder="Enter Subject"></Input>
              <textarea placeholder="Enter Message"></textarea>
            </div>

            <Button
              color="primary"
              variant="contained"
              style={{
                borderRadius: 20,
                backgroundcolor: "blue",
                // padding: "18px 36px",
                margin: "10px",
                fontWeight: "bold",
              }}
            >
              Primary
            </Button>
          </form>
        </div>
        <div>
          <div>
            <img href="#Bottom projectimage"></img>
            <img href="#GO up button"></img>
          </div>
        </div>
      </div> */}
      <Box>
        <Contact />
      </Box>
    </Box>
  );
};

export default Contact_me;
