import { Box, Button, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";

export const NoteTakerFront = () => {
  return (
    <Box
      sx={{
        backgroundColor: blueGrey[600],
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
            lg: "350px",
          },
          maxWidth: {
            sm: "400px",
            lg: "350px",
            xl: "unset",
          },
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src="/portfolio/assets/images/note-taker.png"
          alt="Note Taker"
          height="100%"
          width="100%"
        />
      </Box>
      <Box
        sx={{
          paddingTop: { lg: "36px", xs: "28px" },
          textAlign: "center",
          maxWidth: "50%",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, color: "white" }}>
          Note Taker
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          sx={{ display: { xs: "none", sm: "inherit" } }}
        >
          An application that allows users to add important notes.
        </Typography>
      </Box>
    </Box>
  );
};

export const NoteTakerBack = () => {
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
      <Typography
        variant="subtitle1"
        color="white"
        sx={{ display: { xs: "none", sm: "inherit" } }}
      >
        React, Redux, TypeScript, Node, Express, PostgreSQL, Heroku, Material UI
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
          href="https://note-taker-salvador.herokuapp.com/"
        >
          Demo
        </Button>
        <Button
          variant="outlined"
          size="medium"
          href="https://github.com/salvadordiaz1222/Note-Taker"
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};
