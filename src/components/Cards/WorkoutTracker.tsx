import { Button, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

export const WorkoutTrackerFront = () => {
  return (
    <Box
      sx={{
        backgroundColor: red[400],
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          minWidth: {
            lg: "422px",
            xs: "300px",
          },
          top: "25%",
          left: "56%",
        }}
      >
        <img
          src="/assets/images/fitness-tracker.png"
          alt="Budget Tracker"
          height="100%"
          width="100%"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          maxWidth: "50%",
          top: "50%",
          transform: "translateY(-50%)",
          left: "4%",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
          Workout Tracker
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          sx={{ display: { xs: "none", sm: "inherit" } }}
        >
          An application that allows users to create, track and view daily
          workouts. A dashboard is available so they can see all of their
          workouts.
        </Typography>
      </Box>
    </Box>
  );
};

export const WorkoutTrackerBack = () => {
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
        MongoDB, Mongoose, Express JS, Heroku
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
          href="https://github.com/salvadordiaz1222/Workout-tracker"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          size="medium"
          href="https://workout-tracker-app.herokuapp.com/"
        >
          Demo
        </Button>
      </Box>
    </Box>
  );
};
