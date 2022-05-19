import React from "react";
import { products } from "../../data/productsData";
import styles from './styles.module.scss';

console.debug(products)

const Products = () => {
    return (
        <div className={styles.productsContainer}>
            {products.amiibo.map((amiibo, i) => (
            <div key={i} className={styles.product}>
                <img src={amiibo.image} alt={amiibo.amiiboSeries} />
                <div>
                    <p>
                        {amiibo.amiiboSeries} - {amiibo.character} - $20.000.- 
                    </p>
                </div>
                <button onClick={() => console.log(amiibo)}>Add to cart</button>
            </div>
            ))}
        </div>
    );
}

export default Products;