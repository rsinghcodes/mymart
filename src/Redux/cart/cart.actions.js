import CartActionTypes from "./cart.types";

export const toggleCartOpen = () => ({
  type: CartActionTypes.TOGGLE_CART_DRAWER,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
