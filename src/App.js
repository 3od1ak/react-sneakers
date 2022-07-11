import Header from './components/Header';
import Basket from './components/Basket';
import Favorite from '../src/pages/Favorite';
import Home from '../src/pages/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  // Link
} from 'react-router-dom';

function App() {
  // ---> Данные и их изменения
  const [items, setItems] = useState([]); // Данные с кроссами на главной
  const [contentItems, setContentItems] = useState([]); // Данные в корзине
  const [favoriteItems, setFavoriteItems] = useState([]); // Данные в избранном
  const [cartOpened, setCartOpened] = useState(false); // Данные открытости корзины (false - не открытая по умолчанию)
  const [inSearch, setInSearch] = useState(''); // Данные в строке поиска
  // <--- Данные и их изменения

  // ---> Действия после того, как какие-либо данные изменились
  useEffect(() => {
    axios.get('https://62bb481d7bdbe01d529b55db.mockapi.io/Content').then((res) => {
      setItems(res.data);
    });
    axios.get('https://62bb481d7bdbe01d529b55db.mockapi.io/Favorite').then((res) => {
      setFavoriteItems(res.data);
    });

    // Получить содержимое блока "Все кроссовки" и обновить `items`
    axios.get('https://62bb481d7bdbe01d529b55db.mockapi.io/Cart').then((res) => {
      setContentItems(res.data);
    });
    // Получить содержимое блока "Корзина" и обновить `contentItems`
  }, []); // Код будет вызываться только в случае, если что-то изменится в выше указанных массивах
  // <--- Действия после того, как какие-либо данные изменились

  const toAddCart = (obj) => {
    if (contentItems.find((el) => el.imageUrl === obj.imageUrl)) {
      return null;
      // contentItems.find((el) => el.title === obj.title)
    } else {
      axios.post('https://62bb481d7bdbe01d529b55db.mockapi.io/Cart', obj);
      // При клике на добавление товара в блоке "Все кроссовки" добавляет его на бэк в Корзину
      setContentItems((prev) => [...prev, obj]);
    }
    // Ищет объект, передаваемый в obj по title и если он уже существует в массиве - ещё раз туда его не записывает
  };
  // AddCart содержит данные из onPlus в obj и в себе выполняет обновление компонента contentItems в виде добавления к нему всех взятых в себя параметров (obj)

  const onRemoveItem = (id) => {
    axios.delete(`https://62bb481d7bdbe01d529b55db.mockapi.io/Cart/${id}`);
    setContentItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeInputSearch = (event) => {
    setInSearch(event.target.value);
    // setInSearch('');
    // Функция изменяет inSearch на значение, вводимое в Input поиска
  };

  const onFavorite = (obj) => {
    if (favoriteItems.find((el) => el.imageUrl === obj.imageUrl)) {
      return null;
    } else {
      axios.post('https://62bb481d7bdbe01d529b55db.mockapi.io/Favorite', obj);
      setFavoriteItems((prev) => [...prev, obj]);
    }
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          element={
            <div className="wrapper clear">
              {cartOpened && (
                <Basket
                  items={contentItems}
                  contItems={items}
                  onClose={() => setCartOpened(false)}
                  onRemove={onRemoveItem}
                />
                // Если cartOpened === false, корзина не появится, в другом случае - появится
                // onClose вызывается в Basket и делает setCartOpened === false
                // --------------------------------------------------------------------------
                // contItems содержит данные из Fetch с setItems
                // Items содержит данные из Fetch
              )}

              <Header onClickCart={() => setCartOpened(true)} />
              {/* onClickCart вызывается в Header и делает setCartOpened === true */}

              <Home
                items={items}
                inSearch={inSearch}
                setInSearch={setInSearch}
                onChangeInputSearch={onChangeInputSearch}
                onFavorite={onFavorite}
                toAddCart={toAddCart}
              />
            </div>
          }
        />
        <Route
          path={'/favorite'}
          element={<Favorite items={favoriteItems} onFavorite={onFavorite} toAddCart={toAddCart} />}
        />

        <Route path={'*'} element={'Не найдено'} />
      </Switch>
    </Router>
  );
}

export default App;
