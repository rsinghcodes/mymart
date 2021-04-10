import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Box, CssBaseline, Divider } from "@material-ui/core";
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
        <Divider style={{ margin: "3rem 0rem" }} />
        <Box
          style={{
            justifyContent: "space-around",
          }}
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <Category />
        </Box>
        <Divider style={{ margin: "3rem 0rem" }} />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
