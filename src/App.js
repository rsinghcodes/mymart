import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Banner from "./Components/Banner/Banner";
// import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Sora", "Roboto"].join(","),
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

const products = [
  {
    id: 1,
    name: "Tide Plus Jasmine & Rose Detergent",
    mrp: 50,
    saveOffer: 5,
    sellingPrice: 45,
    src:
      "https://www.jiomart.com/images/product/150x150/490999937/tide-plus-jasmine-rose-detergent-powder-4-kg-get-1-kg-free-0-20210205.jpg",
  },
  {
    id: 2,
    name: "Tide Plus Jasmine & Rose Detergent",
    mrp: 20,
    saveOffer: 2,
    sellingPrice: 18,
    src:
      "https://www.jiomart.com/images/product/150x150/490999937/tide-plus-jasmine-rose-detergent-powder-4-kg-get-1-kg-free-0-20210205.jpg",
  },
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <Container
          maxWidth="lg"
          disableGutters={true}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {products.map((product) => {
            return <Products key={product.id} product={product} />;
          })}
        </Container>

        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
