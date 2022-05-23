import React, { Component } from "react";
import { connect } from "react-redux";
import { setAppState } from "../../actions/appActions";
import { formatCurrency } from "../../util";
import ItemCart from "../itemCart";

import styles from './styles.module.scss';

class Checkout extends Component {
    render() {
        const cartItems = this.props.cart.items;

        const total = cartItems?.reduce(
            (previous, current) => previous + current.count * current.price,  0
        );

        console.log("carro", cartItems, total)
        return (
            <div className={styles.checkOutContainer}>
                <h1>Detalle de tu Compra</h1>
                <div className={styles.productsContainer}>
                    {cartItems.map((item, i) => (
                        <ItemCart key={i} item={item} />
                    ))}
                </div>
                <h2 className={styles.total}>Total: {formatCurrency(total)}</h2>
                <div className={styles.buttons}>
                    <button onClick={(e) => this.props.setAppState('shopping')}>
                       Volver
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { setAppState })(Checkout);