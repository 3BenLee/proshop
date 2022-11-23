import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (currentCartItem) => currentCartItem.product === item.product // product is the _id which is set in cartActions.js
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((currentCartItem) =>
            currentCartItem.product === existItem.product // product is the _id which is set in cartActions.js
              ? item
              : currentCartItem
          ),
        };
      } else {
        return {
          // return previous state and previous cartItems + new item
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (currentCartItem) => currentCartItem.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
