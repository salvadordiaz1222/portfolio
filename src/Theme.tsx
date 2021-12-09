import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: grey[200],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: grey[100],
          color: grey[100],
          textDecoration: "none",
          "&:hover": {
            borderColor: "transparent",
            backgroundColor: grey[600],
            color: "white",
          },
        },
      },
    },
  },
});

export default theme;
