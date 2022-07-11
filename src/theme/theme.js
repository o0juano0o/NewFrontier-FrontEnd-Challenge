import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  gradient: "linear-gradient(45deg, #2e314b 30%, #01081c 90%)",
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#923b3b",
    },
  },
  components: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #2e314b 30%, #01081c 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: "linear-gradient(45deg, #2e314b 30%, #01081c 90%)",
        },
      },
    },
  },
});
