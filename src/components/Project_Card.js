import React from "react";
import Data from "../Data.json";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

// Placeholder image import
import card_image from "../assets/beauty1.webp";

// Dynamically import images
const getImage = (imageName) => {
  try {
    return require(`../assets/${imageName}`);
  } catch (err) {
    return card_image; // Fallback to placeholder if image is not found
  }
};

const Project_Card = () => {
  return (
    <Container sx={{ marginTop: "10px" }} maxWidth="false">
      <Grid
        container
        spacing={5}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {Data.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)", // Softer shadow
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={getImage(project.image)} // Use the dynamic image loading function
                  alt={project.title}
                  sx={{ borderRadius: "15px 15px 0 0" }}
                />
                <CardContent sx={{ padding: "15px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "#0693e3", // Customize color as needed
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: "5px", minHeight: "50px" }} // Reduced minHeight
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      {project.techStack}
                    </Typography>
                    <Typography variant="caption" color="primary">
                      {project.status}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Project_Card;
