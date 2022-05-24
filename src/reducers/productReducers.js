/* eslint-disable import/no-anonymous-default-export */
import { FETCH_PRODUCTS } from "../actions/types";
import { generateRandomPrice } from "../utils/prices";
  
const initState = { items: null };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      action.payload = action.payload.amiibo.map((item) => {
        const id = item.head + '' + item.tail;
        const price = generateRandomPrice();
        return {...item, id, price}
      });
      return { ...state, items: action.payload };
    default:
      return state;
  }
}