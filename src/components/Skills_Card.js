// import React from "react";
// import "./card.css";

// const Card = () => {
//   return (
//     <>
//       <div className="card_container">
//         <img
//           className="card_image"
//           src="beauty1.webp"
//           alt="card representation"
//         />

//         <h2 className="car_title">EthioFreelance Website</h2>
//         <p className="card_description">
//           A website that connects Freelancers with Employers
//         </p>
//       </div>
//     </>
//   );
// };

// export default Card;
import React from "react";
import Data from "../Data.json";
import { Container } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";

const Project_Card = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Grid container spacing={5} style={{ marginTop: "20px" }}>
        {Data.map((result, index) => (
          <Grid item xs={12} md={4} sm={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={result.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {result.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {result.description}
                  </Typography>
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
