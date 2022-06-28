import React from 'react';
import styles from './Content.module.scss';

const Content = ({ title, price, imageUrl, heart, like }) => {
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <img width={133} height={112} src={imageUrl} alt="1 sneaker" />
        <p className={styles.man_sneakers}>{title}</p>
        <div className={styles.price_and_plus}>
          <div className={styles.price}>
            <span className={styles.price__one}>Цена:</span>
            <b className={styles.price__two}>{price} руб.</b>
          </div>
          <button className={styles.button} onClick={() => alert(1111)}>
            <img width={11} height={11} src={like} alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
