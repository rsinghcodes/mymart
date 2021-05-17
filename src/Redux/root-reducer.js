import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeReducer from "./theme/theme.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
// import favoriteReducer from "./favorite/favorite.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "theme", "favorite"],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  // favorite: favoriteReducer,
});

export default persistReducer(persistConfig, rootReducer);
