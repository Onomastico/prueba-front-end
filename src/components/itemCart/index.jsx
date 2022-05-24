import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { formatCurrency } from "../../utils/currency";

import styles from "./styles.module.scss";

class ItemCart extends Component {
  render() {
    const item = this.props.item;

    return (
      <div className={styles.cartItem}>
        <img src={item.image} alt={item.name} />
        <div className={styles.dataContainer}>
          <div className={styles.left}>
            <p>{item.name}</p>
            <div className={styles.buttons}>
              <button onClick={(e) => this.props.addToCart(this.props.cartItems, item)}>
                Agregar
              </button>
              <button onClick={(e) => this.props.removeFromCart(this.props.cartItems, item)}>
                Quitar
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div>{item.count}</div>
            <p>Total: {formatCurrency(item.count * item.price)}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(ItemCart);
