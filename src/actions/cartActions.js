import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let alreadyInCart = false;

    cartItems.forEach(element => {
        if (element.id === product.id) {
            element.count += 1;
            alreadyInCart = true;
        }
        
    });

    if (alreadyInCart) {
        cartItems.push({ ...product, count:1});
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: {cartItems}});
};

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    dispatch({type: REMOVE_FROM_CART, payload: {cartItems}});
};