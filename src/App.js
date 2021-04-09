import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Box, CssBaseline } from "@material-ui/core";
import Header from "./Components/Header/Header";
// import Products from "./Components/Products/Products";
import Category from "./Components/Category/Category";
// import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Rubik"].join(","),
  },
  palette: {
    primary: {
      main: "#702bd4",
    },
    secondary: {
      main: "#f83245",
    },
    background: {
      default: "#f5faff",
    },
    text: {
      primary: "#001833",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          maxWidth="lg"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          style={{ border: "1px solid red", marginTop: "4rem" }}
        >
          <Category name="sakso" />
          <Category name="sakso" />
          <Category name="sakso" />
          <Category name="sakso" />
        </Box>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
