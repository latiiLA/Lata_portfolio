import React from "react";
// import image from "./download.jpg";
import "./home_body.css";

// import { Avatar, Button } from "@material-ui/core";
import { Box, Typography, Button } from "@mui/material";

const Home_body = () => {
  return (
    <Box fluid>
      {/* bgcolor="#01579b" */}
      <Box container backgroundcolor="primary" fluid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            margin: "4rem 13.5rem",
            // marginLeft:{}
            padding: "10rem 0rem",
          }}
        >
          <Box className="home_left">
            <Typography
              sx={{
                fontSize: "5rem",
                fontFamily: "Poppins",
                fontWeight: "bold",
                // color: "white",
                marginTop: "10%",
              }}
            >
              Hi, I'm Lata Amenu
            </Typography>
            <Typography
              // className="home_developer"
              sx={{
                fontSize: "3rem",
                fontFamily: "san serif",
                fontWeight: "bold",
                // color: "white",
                marginTop: "0%",
              }}
            >
              Front-End Developer
            </Typography>
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontFamily: "san serif",
                fontWeight: "bold",
                // color: "white",
              }}
            >
              I am a Front-end website developer with the knowledge of React JS,
              I have Back-end development knowledge with Express JS, Node JS and
              Database knowledges such as Mongo DB and SQL.{" "}
            </Typography>
            <div className="home_btns">
              <Button
                color="primary"
                variant="contained"
                style={{
                  borderRadius: "0.5rem",
                  // backgroundcolor: "primary",
                  // padding: "18px 36px",
                  margin: "10px",
                  fontWeight: "bold",
                  padding: "1rem 1rem",
                }}
              >
                HIRE ME
              </Button>
              <Button
                color="primary"
                variant="contained"
                style={{
                  borderRadius: "0.5rem",
                  // backgroundcolor: "primary",
                  // padding: "18px 36px",
                  margin: "10px",
                  fontWeight: "bold",
                  padding: "1rem",
                }}
              >
                DOWNLOAD RESUME
              </Button>
            </div>
          </Box>

          <Box>
            <img className="home_right" src="LA.jpg" alt="lata's portfolio" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home_body;
