import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
// import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Sora"].join(","),
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "4rem",
          }}
        >
          {products.map((product) => {
            return <Products key={product.id} product={product} />;
          })}
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
