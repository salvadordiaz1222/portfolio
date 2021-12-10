import { Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

export const TaskTrackerFront = () => {
  return (
    <Box
      sx={{
        backgroundColor: blue[200],
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { xs: "65%", lg: "50%" },
          bottom: 0,
          right: 0,
          transform: "translate(30%, 10%)",
          left: "40%",
        }}
      >
        <img
          src="/portfolio/assets/images/task-tracker.png"
          alt="Task Tracker"
          height="100%"
          width="100%"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          maxWidth: "45%",
          top: "50%",
          transform: "translateY(-50%)",
          left: "4%",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
          Task Tracker
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          sx={{ display: { xs: "none", sm: "inherit" } }}
        >
          An application that allows users to create tasks in any given date and
          time. After saving the task, the user can mark it as completed.
        </Typography>
      </Box>
    </Box>
  );
};

export const TaskTrackerBack = () => {
  return (
    <Box
      sx={{
        paddingTop: { lg: "36px", xs: "28px" },
        textAlign: "center",
        maxWidth: "50%",
        margin: "0 auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
        Technologies Used
      </Typography>
      <Typography variant="subtitle1" color="white" sx={{ display: "block" }}>
        React, Express, Mongoose, json-server, Java Script, HTML, CSS
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "8px",
          alignItems: "center",
          paddingTop: "12px",
        }}
      >
        <Button
          variant="outlined"
          size="medium"
          href="https://github.com/salvadordiaz1222/task-tracker-react"
        >
          GitHub
        </Button>
        <Button variant="outlined" size="medium" href="/">
          Demo
        </Button>
      </Box>
    </Box>
  );
};
