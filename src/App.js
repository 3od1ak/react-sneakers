import Content from './components/Main/Content';
import Header from './components/Main/Header';
import AllSneakers from './components/Main/AllSneakers';
import Sneakers from './assets/sneakers.json';
import Basket from './components/Basket/Basket';

function App() {
  return (
    <div className="wrapper clear">
      {/* Корзина --> */}
      <Basket />
      {/* <-- Корзина */}
      {/* Хедер --> */}
      <Header />
      {/* <-- Хедер */}
      {/* Содержание --> */}
      <div className="sneakers-and-search">
        <h1 className="allsneakers">Все кроссовки</h1>
        <div className="search-block">
          <img className="search-img" width={15} height={15} src="img/search.png" alt="" />
          <input placeholder="Поиск"></input>
        </div>
      </div>
      <div className="filterSneakers">
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
      {/* <-- Содержание */}
    </div>
  );
}

export default App;
