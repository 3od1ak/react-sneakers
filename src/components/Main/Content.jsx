import React from 'react';

const Content = ({ title, price, imageUrl, heart, like }) => {
  return (
    <div className="content">
      <div className="card">
        <img width={133} height={112} src="img/sneakers/1.jpg" alt="1 sneaker" />
        <p className="man_sneakers">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className="price-and-plus">
          <div className="price">
            <span className="price__one">Цена:</span>
            <b className="price__two">12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/likes/noPlus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
