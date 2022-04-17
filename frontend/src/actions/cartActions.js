import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  // data is desctructured from res
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      image: data.image,
      countInStock: data.countInStock,
      quantity,
    },
  });
  /**
   * Save the current cart items to local storage
   * Need to stringify since we recieve a js object from getState()
   * and local storage only deals with strings
   */
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
