import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from '../cart';
import Products from '../products';
import Checkout from '../checkout';

import styles from './styles.module.scss';

class Home extends Component {
    render() {
        const appState = this.props.appState;

        return (
            <div className={styles.home}>
                {((appState === 'shopping') ? <><Cart /><Products /></> : <Checkout />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    appState: state.appState
});

export default connect(mapStateToProps)(Home);
