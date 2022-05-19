import React from 'react';
import Cart from '../cart'
import Products from '../products'

import styles from './styles.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <Cart />
            <Products />
        </div>
    );
}

export default Home;