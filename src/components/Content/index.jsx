import React, { useState } from 'react';
import styles from './Content.module.scss';

const Content = ({ title, price, imageUrl, heart, like, onPlus, onHeart }) => {
  const [statusPlus, setStatusPlus] = useState(false);
  const [statusHeart, setStatusHeart] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setStatusPlus(!statusPlus);
  };

  const onClickHeart = () => {
    onHeart({ title, price, imageUrl, heart, like, onPlus, onHeart });
    setStatusHeart(!statusHeart);
  }
  // onPlus берёт все переданные пропсы в себя и передает их в App.js

  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <img
          onClick={onClickHeart}
          className={styles.heart}
          width={32}
          height={32}
          src={statusHeart === true ? heart[0] : heart[1]}
          alt="Heart"
        />
        <img
          className={styles.imgsneaker}
          width={133}
          height={112}
          src={imageUrl}
          alt="1 sneaker"
        />
        <p className={styles.man_sneakers}>{title}</p>
        <div className={styles.price_and_plus}>
          <div className={styles.price}>
            <span className={styles.price__one}>Цена:</span>
            <b className={styles.price__two}>{price} руб.</b>
          </div>
          <img
            onClick={onClickPlus}
            width={32}
            height={32}
            src={statusPlus === true ? like[0] : like[1]}
            alt="Plus"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
