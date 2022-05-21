import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { fetchProducts } from "../../actions/productActions";
import {generateRandom, formatCurrency} from "../../util"

import styles from './styles.module.scss';

class Products extends Component {
    componentDidMount() {
      this.props.fetchProducts();
    }

    render () {
        console.log("LOG 1 ", this.props.products);
        if (this.props.products) {
            console.log("LOG 2 ");
            return <div className={styles.productsContainer}>
                {this.props.products.amiibo.map((amiibo, i) => (
                <div key={i} className={styles.product}>
                    <img src={amiibo.image} alt={amiibo.amiiboSeries} />
                    <div>
                        <p>{amiibo.amiiboSeries} - {amiibo.name} - {formatCurrency(generateRandom())}.-</p>
                    </div>
                    <button onClick={(e) => this.props.addToCart(this.props.cartItems, amiibo)}>Add to cart</button>
                </div>
                ))}
            </div>
        } else {
            return <div><img scr="https://github.com/Onomastico/prueba-front-end/blob/main/public/YCZH.gif" alt="loader" /></div>
        }
    }
}

const mapStateToProps = (state) => ({
    products: state.products.items,
    cartItems: state.cart.items
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);