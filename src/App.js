import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from "./Firebase/AuthProvider";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: ["Rubik"].join(","),
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
          background: {
            default: prefersDarkMode ? "#303030" : "#f5faff",
          },
          text: {
            primary: prefersDarkMode ? "#f3f3f6" : "#001833",
          },
        },
        overrides: {
          MuiAppBar: {
            colorPrimary: {
              backgroundColor: prefersDarkMode ? "#303030" : "#fff",
            },
          },
          MuiButton: {
            text: {
              background: prefersDarkMode ? "#303030" : "#001833",
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
  console.log(theme);

  return (
    <>
      {/* <AuthProvider> */}
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes />
        </Router>
        <Footer />
        <CssBaseline />
      </ThemeProvider>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
