import { Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

export const BudgetTrackerFront = () => {
  return (
    <Box
      sx={{
        backgroundColor: grey[800],
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
          right: "56%",
        }}
      >
        <img
          src="/portfolio/assets/images/budget-tracker.png"
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
          right: "4%",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
          Budget Tracker
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          sx={{ display: { xs: "none", sm: "inherit" } }}
        >
          An application that allows users to add deposits and expenses to their
          budgets with or without an internet connection.
        </Typography>
      </Box>
    </Box>
  );
};

export const BudgetTrackerBack = () => {
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
        Progressive Web App, Webpack, ExpressJS, Mongoose, Heroku
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
          href="https://github.com/salvadordiaz1222/budget-tracker"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          size="medium"
          href="https://budget-tracker-sd.herokuapp.com/"
        >
          Demo
        </Button>
      </Box>
    </Box>
  );
};
