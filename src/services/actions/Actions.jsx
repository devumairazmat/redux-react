import { ADD_TO_CART } from "../reducers/Constants";
export const addToCart = (data) => {
  return {
    data: data,
    type: ADD_TO_CART,
  };
};
