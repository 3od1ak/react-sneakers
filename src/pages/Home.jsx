import React from 'react'
import Content from '../components/Content';


const Home = ({ items,
  inSearch,
  setInSearch,
  onChangeInputSearch,
  onFavorite,
  toAddCart }) => {

  return (
    <div>
      <div className="sneakers-and-search">
        <h1 className="allsneakers">
          {inSearch ? `Поиск по запросу: ${inSearch}` : 'Все кроссовки'}
          {/* Если в inSearch есть что-то, то будет выполняться <Поиск по запросу...>, в ином случае <Все кроссовки> */}
        </h1>
        <div className="search-block">
          <img className="search-img" width={15} height={15} src="img/search.png" alt="" />
          <input onChange={onChangeInputSearch} value={inSearch} placeholder="Поиск"></input>
          {/* Вводимый в Input текст при изменении (onChange) выполняет функцию onChangeInputSearch*/}
          {/* value передает значение из inSearch */}
          {inSearch && (
            <img
              className="close_search"
              onClick={() => setInSearch('')}
              width={11}
              height={11}
              src="/img/x.png"
              alt="X.svg"
            />
          )}
          {/* Если в inSearch есть какой-то текст - то будет выводиться картинка с возможностью удаления текста.*/}
          {/* onClick делает строку inSearch пустой */}
        </div>
      </div>
      <div className="filterSneakers">
        {items
          .filter((item) => item.title.toLowerCase().includes(inSearch))
          // Фильтрация массива контента по `title`, приведение к нижнему регистру и нахождение
          .map((value, i) => (
            <Content key={i} onHeart={obj => onFavorite(obj)} onPlus={(obj) => toAddCart(obj)} {...value} />
            // onPlus берёт из Content -> onPlus объект(obj): { title, price, imageUrl } и передает его в функцию AddCart()
          ))}
      </div></div>
  )
}

export default Home