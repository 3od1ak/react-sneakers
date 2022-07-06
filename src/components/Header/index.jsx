import React from 'react';
import styles from './Header.module.scss';
import {
  // BrowserRouter as Router,
  // Routes as Switch,
  // Route,
  Link
} from "react-router-dom";

const Header = ({ onClickCart, onClickFavorite }) => {
  return (
    <header>
      <Link to="/">
        <div className={styles.headerLeft}>
          <img width={40} height={40} src="img/logo.png" alt="" />
          <div className={styles.headerInfo}>
            <h3 className={styles.text__react_sneakers}>React Sneakers</h3>
            <p className={styles.text__store_best}>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className={styles.headerRight}>
        <li onClick={onClickCart} className={styles.price}>
          <img width={18} height={18} src="img/cart.svg" alt="" />
          <span>1205 руб.</span>
        </li>
        <li className={styles.favorite}>
          <Link to="/favorite">
            <img width={18} height={18} src="img/favorite.svg" alt="" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
