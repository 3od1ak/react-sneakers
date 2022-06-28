import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.headerLeft}>
        <img width={40} height={40} src="img/logo.png" alt="" />
        <div className={styles.headerInfo}>
          <h3 className={styles.text__react_sneakers}>React Sneakers</h3>
          <p className={styles.text__store_best}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li className={styles.price}>
          <img width={18} height={18} src="img/cart.svg" alt="" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
