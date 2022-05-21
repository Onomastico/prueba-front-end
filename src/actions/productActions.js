import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE } from "./types";
  
export const fetchProducts = () => (dispatch) => {
    fetch("https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super%20Smash%20Bros.")
        .then((res) => res.json())
        .catch((err) =>
            fetch("../../data/productsData.json")
                .then((res) => res.json())
                .then((data) => data.products)
            )
        .then((data) => {
            dispatch({ type: FETCH_PRODUCTS, payload: data });
        });
};
  
export const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
        products.sort((a, b) =>
        sort === "lowestprice"
            ? a.price > b.price
            ? 1
            : -1
            : a.price < b.price
            ? 1
            : -1
        );
    } else {
        products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }

    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: products,
        },
    });
};