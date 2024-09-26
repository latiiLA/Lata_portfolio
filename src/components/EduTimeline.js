import React from "react";
import { Box, Divider, Paper } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

const timelineEntries = [
  {
    date: "Jul 2024 - Present",
    title: "Full Stack Developer",
    institution: "Cooperative Bank Of Oromia",
    icon: <WorkIcon />,
  },

  {
    date: "May 2023 - Jul 2024",
    title: "System Integration",
    institution: "Cooperative Bank Of Oromia",
    icon: <WorkIcon />,
  },
  {
    date: "Feb 2022 - May 2023",
    title:
      "Technology and Digital Banking Officer under Project Management Office",
    institution: "Cooperative Bank Of Oromia",
    icon: <WorkIcon />,
  },
  {
    date: "2017 - 2021",
    title: "Bachelor of Science Degree Graduate",
    institution: "Addis Ababa Science and Technology University",
    description: "BSc. in Software Engineering",
    icon: <SchoolIcon />,
  },
  {
    date: "Nov 2021 - Feb 2022",
    title: "Academic and Research Assistant",
    institution: "Adama Science and Technology University",
    icon: <WorkIcon />,
  },
  {
    date: "2021 - Present",
    title: "Web Developer (Freelance)",
    description: "Different Employees - Mostly Using React Library",
    icon: <WorkIcon />,
  },
];

const EduTimeline = () => {
  return (
    <Box>
      <Box
        id="experiences"
        sx={{
          background: "#F0F4F8",
          padding: "3rem 6rem",
          borderRadius: "8px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#333",
          }}
        >
          Education and Experiences
        </Typography>
        <Timeline position="alternate">
          {timelineEntries.map((entry, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0", color: "#777" }}
                align={index % 2 === 0 ? "right" : "left"}
                variant="body2"
              >
                {entry.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  {entry.icon || <RepeatIcon />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: "1rem",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ fontWeight: "bold", color: "#333" }}
                  >
                    {entry.title}
                  </Typography>
                  {entry.institution && (
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {entry.institution}
                    </Typography>
                  )}
                  {entry.description && (
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {entry.description}
                    </Typography>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
      <Divider
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,147,233,1) 0%, rgba(255,0,150,1) 100%)", // Gradient background
          height: 4, // Increased height for better visibility
          borderRadius: "4px", // Rounded edges
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          margin: "20px 0", // Spacing around the divider
        }}
      />
    </Box>
  );
};

export default EduTimeline;
