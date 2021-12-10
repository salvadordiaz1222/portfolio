import { Chip, Box, Typography } from "@mui/material";
import React from "react";

export const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "Mongoose",
    "HTML",
    "CSS",
    "Material UI",
    "NoSQL",
    "MySQL",
    "API's",
    "Restful API",
    "GitHub",
    "Heroku",
    "Apollo Server",
  ];

  const skillChips = skills.map((skill) => {
    return (
      <Chip
        label={skill}
        // size="medium"
        sx={{
          margin: "0.5rem",
          height: "30px",
          fontSize: "1rem",
        }}
      />
    );
  });
  return (
    <div>
      <Typography
        variant="h4"
        color="primary"
        sx={{
          marginBottom: { lg: "24px", xs: "14px" },
          gridColumn: { xs: "1 / span 2" },
          alignSelf: { xs: "center" },
          color: "text.primary",
        }}
      >
        Skills:
      </Typography>
      <Box>{skillChips}</Box>
    </div>
  );
};
