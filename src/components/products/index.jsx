import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { fetchProducts } from "../../actions/productActions";
import { formatCurrency} from "../../util"

import styles from './styles.module.scss';

class Products extends Component {
    componentDidMount() {
      this.props.fetchProducts();
    }

    render () {
        if (this.props.products) {
            return <div className={styles.productsContainer}>
                {this.props.products.map((amiibo, i) => (
                <div key={i} className={styles.product}>
                    <img src={amiibo.image} alt={amiibo.amiiboSeries} />
                    <div>
                        <p>{amiibo.amiiboSeries} - {amiibo.name}</p><p>{formatCurrency(amiibo.price)}</p>
                    </div>
                    <button onClick={(e) => this.props.addToCart(this.props.cartItems, amiibo)}>Add to cart</button>
                </div>
                ))}
            </div>
        } else {
            return <div>
                <img src="https://i.gifer.com/YCZH.gif" alt="loading" />
            </div>
        }
    }
}

const mapStateToProps = (state) => ({
    products: state.products.items,
    cartItems: state.cart.items
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);