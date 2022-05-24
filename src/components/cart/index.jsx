import React, { Component } from "react";
import { connect } from "react-redux";
import { formatCurrency } from "../../utils/currency";
import { toggleCartState } from "../../actions/cartActions";
import { setAppState } from "../../actions/appActions";
import { CONST_CHECKOUT } from "../../utils/constants";
import ItemCart from "../itemCart";

import styles from './styles.module.scss';

class Basket extends Component {
    render() {
        const cartItems = this.props.cart.items;
        const cartOpen = this.props.cart.isOpen;
        const productsLength = this.props.cart.items.length;

        const total = cartItems?.reduce(
            (previous, current) => previous + current.count * current.price,  0
        );
        
        return (
            <div className={styles.cartContainer}>
                <div onClick={(e) => this.props.toggleCartState(!cartOpen)} className={styles.buttonCartContainer}>
                    <div className={styles.buttonCart}>
                        {!cartOpen ? (
                            <img src="../../../closedCart.svg" alt="Boton para cerrar carrito" />
                        ) : (
                            <img src="../../../openCart.svg" alt="Dibujo de un carrito de compra" />
                        )}
                    </div>
                    {!cartOpen && (
                        <div className={styles.productsNumber}>{productsLength}</div>
                    )}
                </div>
                {cartItems && cartOpen && (
                    <div className={styles.cart}>
                        <h2>Tu carrito</h2>
                        {cartItems.length === 0 ? (
                            <p className={styles.cartVacio}>Tu carrito esta vacio</p>
                        ) : (
                            <div className={styles.productsContainer}>
                                {cartItems.map((item, i) => (
                                    <ItemCart key={i} item={item} />
                                ))}
                            </div>
                        )}
                        <h2 className={styles.total}>Total: {formatCurrency(total)}</h2>
                        <div className={styles.buttons}>
                            <button onClick={(e) => this.props.setAppState(CONST_CHECKOUT)}>
                                Ir a Pagar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { toggleCartState, setAppState })(Basket);