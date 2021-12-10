import { Button, Typography } from "@mui/material";
import { blueGrey, teal } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

export const DrinkCreatorFront = () => {
  return (
    <Box
      sx={{
        backgroundColor: blueGrey[300],
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
            lg: "242px",
            xs: "300px",
          },
          top: "25%",
          right: "60%",
        }}
      >
        <img
          src="/portfolio/assets/images/drink-creator.png"
          alt="create your own drink"
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
          Create your own drink
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "white", display: { xs: "none", sm: "inherit" } }}
        >
          An application that will create your own drink based on your answers
          to each question.
        </Typography>
      </Box>
    </Box>
  );
};

export const DrinkCreatorBack = () => {
  return (
    <Box
      sx={{
        paddingTop: { lg: "36px", xs: "28px" },
        textAlign: "center",
        maxWidth: "50%",
        margin: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
        Technologies Used
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "white", display: "block" }}>
        Express, GraphQL, Mongoose, Apollo, Material UI, React
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
          href="https://github.com/LRumgay/Cyber-tender"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          size="medium"
          href="https://cyber-bar.herokuapp.com/"
        >
          Demo
        </Button>
      </Box>
    </Box>
  );
};
