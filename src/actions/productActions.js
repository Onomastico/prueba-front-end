import { FETCH_PRODUCTS } from "./types";
  
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
