import React from "react";
import {
  Avatar,
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { red, grey, blue, blueGrey } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import FlipCard from "./FlipCard";
import { NoteTakerBack, NoteTakerFront } from "./Cards/NoteTaker";
import {
  WorkoutTrackerFront,
  WorkoutTrackerBack,
} from "./Cards/WorkoutTracker";
import { BudgetTrackerFront, BudgetTrackerBack } from "./Cards/BudgetTracker";
import { TaskTrackerFront, TaskTrackerBack } from "./Cards/TaskTracker";
import { BookSearchFront, BookSearchBack } from "./Cards/BookSearch";
import { DrinkCreatorFront, DrinkCreatorBack } from "./Cards/DrinkCreator";
import { ContactInfo } from "./ContactInfo";
import { Skills } from "./Skills";

const Layout = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingLeft: "18px",
        paddingRight: "18px",
        paddingTop: "12px",
        backgroundColor: "background.paper",
        marginTop: 0,
        overflowY: "scroll",
      }}
      height="100%"
    >
      <Grid
        item
        xs={12}
        lg={3}
        sx={{
          display: { xl: "flex" },
          flexDirection: { xl: "column" },
          justifyContent: { xl: "space-evenly" },
        }}
      >
        <Typography
          variant="h3"
          color="primary"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            marginBottom: "45px",
          }}
        >
          Salvador Diaz
        </Typography>
        <Box
          sx={{
            display: { xs: "grid", sm: "flex" },
            gridTemplateColumns: { xs: "49% 49%" },
            columnGap: { xs: "8px" },
            rowGap: { xs: "8px" },
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="Salvador Diaz"
            src="/portfolio/assets/images/salvador.jpg"
            sx={{
              width: { lg: 120, xs: 180 },
              height: { lg: 120, xs: 180 },
              gridColumn: { xs: "1 / span 2" },
              justifySelf: "center",
              marginBottom: { lg: "45px", xs: "10px" },
            }}
          />
          <ContactInfo />
          <Typography
            variant="h5"
            color="primary"
            sx={{
              marginBottom: { lg: "12px", xs: "14px" },
              marginTop: { lg: "5px" },
              color: "text.primary",
            }}
          >
            Who?
            <br /> 👋
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginBottom: { lg: "24px", xs: "14px" },
              fontSize: { xs: "36px", md: "40px" },
              color: "text.secondary",
            }}
          >
            I am a Full-Stack Web Developer{" "}
          </Typography>
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
            {" "}
            What's my story?
          </Typography>
          <Typography
            variant="h6"
            sx={{ gridColumn: { xs: "1 / span 2" }, color: "text.secondary" }}
          >
            Full Stack Web Developer with a background in leadership and
            business administration. Passionate about leveraging data to help
            companies gain competitive advantages. Confident decision-maker with
            proven problem solving skills. Self-starter that thrives in
            collaborative team environments.{" "}
          </Typography>
          <Skills />
        </Box>
      </Grid>
      <Grid xs={12} item sx={{ display: { sm: "none" } }}>
        <Typography variant="h3" color="primary">
          Projects
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={9}
        height="100%"
        spacing={2}
        sx={{ flexDirection: { lg: "initial" } }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { lg: "50%", xs: "auto" },
            maxHeight: { xs: "400px", lg: "none" },
            minHeight: { xs: "350px", lg: "none" },
          }}
        >
          {/* ------------------------------------------------------        Workout Tracker (red)         -------------------------------------------------*/}
          <FlipCard
            front={<WorkoutTrackerFront />}
            back={<WorkoutTrackerBack />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { lg: "50%", xs: "auto" },
            maxHeight: { xs: "400px", lg: "none" },
            minHeight: { xs: "350px", lg: "none" },
          }}
        >
          {/* ---------------------------------------------------          Budget Tracker (Grey)       -------------------------------------------------- */}

          <FlipCard
            front={<BudgetTrackerFront />}
            back={<BudgetTrackerBack />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { lg: "50%", xs: "auto" },
            maxHeight: { xs: "400px", lg: "none" },
            minHeight: { xs: "350px", lg: "none" },
          }}
        >
          {/* --------------------------------------------------            Note Taker ( blueGrey)       --------------------------------------------------- */}
          <FlipCard front={<NoteTakerFront />} back={<NoteTakerBack />} />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { lg: "50%", xs: "auto" },
            maxHeight: { xs: "400px", lg: "none" },
            minHeight: { xs: "350px", lg: "none" },
          }}
        >
          {/* -------------------------------------------------               Task Tracker (blue)      --------------------------------------------------- */}
          <FlipCard front={<TaskTrackerFront />} back={<TaskTrackerBack />} />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { lg: "50%", xs: "auto" },
            maxHeight: { xs: "400px", lg: "none" },
            minHeight: { xs: "350px", lg: "none" },
          }}
        >
          {/* ----------------------------------------------                Google Books Search       -------------------------------------------------- */}
          <FlipCard front={<BookSearchFront />} back={<BookSearchBack />} />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            width: { xs: "100%", lg: "50%" },
            height: { lg: "50%", xs: "auto" },
            maxHeight: { xs: "400px", lg: "none" },
            minHeight: { xs: "350px", lg: "none" },
          }}
        >
          {/* -------------------------------------------------               Drink Creator       --------------------------------------------------- */}
          <FlipCard front={<DrinkCreatorFront />} back={<DrinkCreatorBack />} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
