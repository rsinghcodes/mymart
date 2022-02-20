import OrderActionTypes from './order.types';

export const addItemFromOrders = (item) => ({
  type: OrderActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromOrders = (item) => ({
  type: OrderActionTypes.CLEAR_ITEM_FROM_ORDER,
  payload: item,
});
