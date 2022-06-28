import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="img/logo.png" alt="" />
        <div className="headerInfo">
          <h3 className="text__react-sneakers">React Sneakers</h3>
          <p className="text__store-best">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li className="price">
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
