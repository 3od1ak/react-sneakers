import React from 'react';
import Sneakers from '../../assets/sneakers.json';
import Content from '../../components/Main/Content';

const Basket = () => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{' '}
          <img className="removeBtn" width={32} height={32} src="/img/likes/x.svg" alt="X.svg" />
        </h2>

        <div className="items">
          <div className="cartItem">
            <img
              className="img__sneaker"
              width={70}
              height={70}
              src="img/sneakers/1.jpg"
              alt="1 sneaker"
            />
            <div className="description-sneaker">
              <p className="man_sneakers">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" width={32} height={32} src="/img/likes/x.svg" alt="X.svg" />
          </div>
          <div className="cartItem">
            <img
              className="img__sneaker"
              width={70}
              height={70}
              src="img/sneakers/2.jpg"
              alt="2 sneaker"
            />
            <div className="description-sneaker">
              <p className="man_sneakers">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" width={32} height={32} src="/img/likes/x.svg" alt="X.svg" />
          </div>
        </div>
        <div className="bottomRazdel">
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
      </div>
    </div>
  );
};

export default Basket;
