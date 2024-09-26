import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Backend = () => {
  return (
    <section style={{ padding: "1rem 0" }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "bold", color: "#0693e3", mb: 3 }}
      >
        Backend Developer
      </Typography>

      <Grid container spacing={2}>
        {/* First Group of Skills */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.03)" },
              borderRadius: "10px",
              boxShadow: 2,
            }}
          >
            <CardContent sx={{ padding: "1rem" }}>
              <Box display="flex" alignItems="center" mb={1.5}>
                <AddCircleOutlineIcon
                  sx={{ fontSize: 30, color: "#4caf50", mr: 1 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    PHP
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Intermediate
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                <AddCircleOutlineIcon
                  sx={{ fontSize: 30, color: "#fbc02d", mr: 1 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Node JS
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Basic
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Group of Skills */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.03)" },
              borderRadius: "10px",
              boxShadow: 2,
            }}
          >
            <CardContent sx={{ padding: "1rem" }}>
              <Box display="flex" alignItems="center" mb={1.5}>
                <AddCircleOutlineIcon
                  sx={{ fontSize: 30, color: "#4caf50", mr: 1 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Python
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Intermediate
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                <AddCircleOutlineIcon
                  sx={{ fontSize: 30, color: "#4caf50", mr: 1 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    MySQL
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Intermediate
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Group of Skills */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.03)" },
              borderRadius: "10px",
              boxShadow: 2,
            }}
          >
            <CardContent sx={{ padding: "1rem" }}>
              <Box display="flex" alignItems="center" mb={1.5}>
                <AddCircleOutlineIcon
                  sx={{ fontSize: 30, color: "#4caf50", mr: 1 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Firebase
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Intermediate
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                <AddCircleOutlineIcon
                  sx={{ fontSize: 30, color: "#4caf50", mr: 1 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    SQL
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Intermediate
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Backend;
