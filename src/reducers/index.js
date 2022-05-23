import { combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducers from "./cartReducers";
import appReducers from "./appReducers";

export default combineReducers({
  appState: appReducers,
  products: productReducers,
  cart: cartReducers,
});