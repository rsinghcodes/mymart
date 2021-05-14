import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectThemeMode } from "../../Redux/theme/theme.selector";

const Theme = ({ children, themeMode }) => {
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeMode})`);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: ["Poppins"].join(","),
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          action: {
            active: prefersDarkMode ? "#f3f3f6" : "#001833",
          },
          primary: {
            main: prefersDarkMode ? "#f3f3f6" : "#001833",
          },
          secondary: {
            main: "#f83245",
          },
          error: {
            main: "#f83245",
          },
          background: {
            default: prefersDarkMode ? "#1f1f1f" : "#f5faff",
            paper: prefersDarkMode ? "#1f1f1f" : "#fff",
          },
          text: {
            primary: prefersDarkMode ? "#f3f3f6" : "#001833",
          },
        },
        overrides: {
          MuiAppBar: {
            colorPrimary: {
              backgroundColor: prefersDarkMode ? "#1f1f1f" : "#fff",
            },
          },
          MuiButton: {
            text: {
              background: prefersDarkMode ? "#1f1f1f" : "#001833",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: prefersDarkMode ? "#f3f3f6" : "#001833",
              borderRadius: 0,
              color: "#f3f3f6",
              height: 45,
              padding: "0 35px",
              textTransform: "none",

              "&:hover": {
                color: prefersDarkMode ? "#f3f3f6" : "#001833",
              },
            },
          },
        },
      }),
    [prefersDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const mapStateToProps = createStructuredSelector({
  themeMode: selectThemeMode,
});

export default connect(mapStateToProps)(Theme);
