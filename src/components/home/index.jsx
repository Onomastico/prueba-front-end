import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from '../cart';
import Products from '../products';
import Checkout from '../checkout';
import { CONST_SHOPPING } from "../../utils/constants";

import styles from './styles.module.scss';

class Home extends Component {
    render() {
        const appState = this.props.appState;

        return (
            <div className={styles.home}>
                {((appState === CONST_SHOPPING) ? <><Cart /><Products /></> : <Checkout />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    appState: state.appState
});

export default connect(mapStateToProps)(Home);
