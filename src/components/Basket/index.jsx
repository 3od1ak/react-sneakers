import React from 'react';
import styles from './Basket.module.scss';

const Basket = ({ onClose, items = [], onRemove }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина{' '}
          <img
            onClick={onClose}
            className={styles.removeBtn}
            width={32}
            height={32}
            src="/img/likes/x.svg"
            alt="X.svg"
          />
        </h2>

        {items.length > 0 ?
          (
            <>
              <div className={styles.items}>
                {items.map((value, i) => (
                  <div key={i} className={styles.cartItem}>
                    <img
                      className={styles.img__sneaker}
                      width={70}
                      height={70}
                      src={value.imageUrl}
                      alt="2 sneaker"
                    />
                    <div className={styles.description_sneaker}>
                      <p className={styles.man_sneakers}>{value.title}</p>
                      <b>{value.price} руб.</b>
                    </div>
                    <img
                      onClick={() => onRemove(value.id)}
                      className={styles.removeBtn}
                      width={32}
                      height={32}
                      src="/img/likes/x.svg"
                      alt="X.svg"
                    />
                  </div>
                ))}
              </div>

              <div className={styles.bottomRazdel}>
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>
                <button>
                  Оформить заказ
                  <img src="/img/arrowRight.svg" alt="" />
                </button>
              </div>
            </>
          ) : <div className={styles.empty}>
            <img width={120} height={120} src="img/basket/EmptyBasket.png" alt="" />
            <h2 className={styles.basket_empty}>Корзина пустая</h2>
            <p>
              <center>Добавьте хотя бы одну пару
                <br /> кроссовок для оформления заказа</center>
            </p>
            <button onClick={onClose}>
              <img src="img/basket/arrowRight.png" alt="" />
              <span> Вернуться назад </span>
            </button>
          </div>}
      </div>
    </div>
  );
};

export default Basket;
