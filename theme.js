import { createTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import Jost from "@fontsource/jost";

const theme = createTheme({
  typography: {
    fontFamily: "jost",
  },
  palette: {
    primary: {
      main: "#010E7E",
      contrastText: "#fff",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontWeight: 700,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
      styleOverrides: {
        root: {
          "-webkit-transform": "scale(1)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontWeight: 600,
            color: "#5c5c5c",
            "&.Mui-disabled": {
              backgroundColor: "#6e6e6e42",
            },
          },
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#5c5c5c",
          fontWeight: 600,
          minWidth: 223,
        },
        filled: {
          fontWeight: 600,
          color: "#5c5c5c",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          minWidth: 223,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: "20px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
