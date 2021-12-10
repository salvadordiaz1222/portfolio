import { Grid, IconButton } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export const ContactInfo = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        justifyItems: "center",
        marginBottom: "12px",
      }}
    >
      <Grid item xs={3}>
        <IconButton size="large" href="www.linkedin.com/in/salvador-diaz122291">
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton size="large" href="https://github.com/salvadordiaz1222">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton size="large" href="tel:832-878-2802">
          <PhoneIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <IconButton size="large" href="mailto:salvador.diaz1222@gmail.com">
          <EmailIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
