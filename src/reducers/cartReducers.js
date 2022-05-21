import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART_STATE } from "../actions/types";

const initState = { items: null, isOpen: false };
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
    case TOGGLE_CART_STATE:
      return { ...state, isOpen: action.payload.newState}
    default:
      return state;
  }
}