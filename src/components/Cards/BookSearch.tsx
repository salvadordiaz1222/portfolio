import { Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

export const BookSearchFront = () => {
  return (
    <Box
      sx={{
        backgroundColor: purple[300],
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
        <img src="/" alt="Google Book Search" height="100%" width="100%" />
        {/* add screenshot */}
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
          Search for a book
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "white", display: { xs: "none", sm: "inherit" } }}
        >
          An application that allows you to search for books and save them to
          your library once you've logged in.
        </Typography>
      </Box>
    </Box>
  );
};

export const BookSearchBack = () => {
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
        Apollo Server, GraphQL, MongoDB Atlas.
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
        <Button variant="outlined" size="medium" href="https://bit.ly/3w6G9DS">
          GitHub
        </Button>
        <Button variant="outlined" size="medium" href="https://bit.ly/3Eyabn4">
          Demo
        </Button>
      </Box>
    </Box>
  );
};
