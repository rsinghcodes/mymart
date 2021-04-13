import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Components/Header/Header";
// import Products from "./Components/Products/Products";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Homepage from "./pages/Homepage/Homepage";

// const product = [
//   {
//     src:
//       "https://www.jiomart.com/images/product/150x150/491107791/dettol-original-soap-125-g-pack-of-4-0-20201015.jpg",
//     name: "Dettol original soap 125g",
//     mrp: 219,
//     saveOffer: 39,
//     sellingPrice: 180,
//   },
// ];

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
          primary: {
            main: prefersDarkMode ? "#303030" : "#FFFFFF",
          },
          secondary: {
            main: "#f83245",
          },
          text: {
            primary: prefersDarkMode ? "#fff" : "#001833",
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Homepage />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
