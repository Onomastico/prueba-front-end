/* eslint-disable import/no-anonymous-default-export */
import {
    FETCH_PRODUCTS,
    ORDER_PRODUCTS_BY_PRICE,
  } from "../actions/types";

import {generateRandomPrice} from "../util"
  
const initState = { items: null, size: "", sort: "" };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      action.payload = action.payload.amiibo.map((item) => {
        const id = item.head + '' + item.tail;
        const price = generateRandomPrice();
        return {...item, id, price}
      });
      return { ...state, items: action.payload };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
}