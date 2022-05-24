import React, { Component } from "react";
import { connect } from "react-redux";
import { setAppState } from "../../actions/appActions";
import { formatCurrency } from "../../utils/currency";
import { CONST_SHOPPING } from "../../utils/constants";
import ItemCart from "../itemCart";

import styles from './styles.module.scss';

class Checkout extends Component {
    render() {
        const cartItems = this.props.cart.items;

        const total = cartItems?.reduce(
            (previous, current) => previous + current.count * current.price,  0
        );

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
                    <button onClick={(e) => this.props.setAppState(CONST_SHOPPING)}>
                       Volver
                    </button>
                </div>
                <div>
                    <div>
                        <h2>Métodos de pago</h2>
                        <hr />
                    </div>
                    <div className={styles.payButtonsContainer}>
                        <button type="button" aria-label="Efectivo">
                            <img src="../../../cash.f594f051.svg" alt="Efectivo" />
                            <span>Efectivo</span>
                        </button>
                        <button type="button" aria-label="fpay">
                            <img src="../../../fpay.ba28bf43.svg" alt="fpay" />
                            <span>fpay</span>
                        </button>
                        <button type="button" aria-label="Tarjeta">
                            <img src="../../../card.db044955.svg" alt="Tarjeta"  />
                            <span>Tarjeta</span>
                        </button>
                        <button type="button" aria-label="sodexo">
                            <img src="../../../sodexo.a353b9a6.svg" alt="sodexo" />
                            <span>sodexo</span>
                        </button>
                        <button type="button" aria-label="Webpay">
                            <img src="../../../webpay.ed91b6cf.svg" alt="Webpay" />
                            <span>Webpay</span>
                        </button>
                    </div>
                    <div>
                        <p>Recuerda que siempre puedes pagar con tarjeta en tu casa</p>
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={(e) => {var dialog = document.getElementById('pagarDialog'); dialog.show()}}>
                            Pagar
                        </button>
                    </div>
                </div>
                <dialog id="pagarDialog" className={styles.dialog}>
                    <p>
                        Este es un dialogo nativo del navegador hecho con html5 y el tag dialog
                    </p> 
                    <p>
                        Pronto tendremos la funcionalidad de pagar habilitada
                    </p>  
                    <button id="hide" onClick={(e) => {var dialog = document.getElementById('pagarDialog'); dialog.close()}}>Cerrar</button>  
                </dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { setAppState })(Checkout);