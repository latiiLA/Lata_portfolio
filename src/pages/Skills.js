import React from "react";
import "../components/skills.css";
import Backend from "../components/Back_End_Skills";
import Frontend from "../components/Front_End_Skills";
import { Box, Divider, Grid } from "@mui/material";

const Skills = () => {
  return (
    <Box id="skills">
      <Box sx={{ marginX: 20, marginTop: 5, marginBottom: 20 }}>
        <section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <h2 style={{ fontSize: "1.8rem" }}>Skills</h2>
            <span style={{ fontSize: "1rem" }}>My technical level</span>
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Frontend />
            <Backend />
          </Grid>
        </section>
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
    </Box>
  );
};

export default Skills;
