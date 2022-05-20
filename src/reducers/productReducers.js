import {
    FETCH_PRODUCTS,
    ORDER_PRODUCTS_BY_PRICE,
  } from "../actions/types";
  
  const initState = { items: [], filteredItems: [], size: "", sort: "" };
  export default function (state = initState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, items: action.payload, filteredItems: action.payload };
      case ORDER_PRODUCTS_BY_PRICE:
        return {
          ...state,
          filteredItems: action.payload.items,
          sort: action.payload.sort,
        };
  
      default:
        return state;
    }
  }