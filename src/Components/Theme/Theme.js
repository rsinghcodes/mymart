import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { grey } from "@material-ui/core/colors";

import { selectThemeMode } from "../../Redux/theme/theme.selector";
import { blueDark, blue } from "./CustomColors";

const Theme = ({ children, themeMode }) => {
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeMode})`);

  const theme = createTheme({
    typography: {
      fontFamily: ["Sora", "sans-serif"].join(","),
    },
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      primary: {
        main: blue[500],
      },
      background: {
        paper: prefersDarkMode ? blueDark[900] : grey[50],
        default: prefersDarkMode ? blueDark[800] : grey[50],
      },
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: prefersDarkMode ? blueDark[800] : grey[50],
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const mapStateToProps = createStructuredSelector({
  themeMode: selectThemeMode,
});

export default connect(mapStateToProps)(Theme);
