import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART_STATE } from './types';
import { CONST_ADD, CONST_REDUCE } from '../utils/constants'
const alterCart = (items, product, type) => {
    const cartItems = items.slice();
    let alreadyInCart = false;

    cartItems.forEach(element => {
        if (element.id === product.id) {
            element.count += type === CONST_ADD ? 1 : -1;
            alreadyInCart = true;
        }
    });

    if (!alreadyInCart) {
        cartItems.push({ ...product, count: 1 });
    }
    return cartItems;
}

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = alterCart(items, product, CONST_ADD);
    dispatch({ type: ADD_TO_CART, payload: {cartItems}});
};

export const reduceInCart = (items, product) => (dispatch) => {
    const cartItems = alterCart(items, product, CONST_REDUCE);
    dispatch({ type: ADD_TO_CART, payload: {cartItems}});
};

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    dispatch({type: REMOVE_FROM_CART, payload: {cartItems}});
};

export const toggleCartState = (newState) => (dispatch) => {
    dispatch({type: TOGGLE_CART_STATE, payload: {newState}});
};