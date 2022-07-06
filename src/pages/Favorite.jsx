import { useEffect, useState } from 'react'
import axios from 'axios';
import Content from '../components/Content';
import Header from '../components/Header';

const Favorite = () => {


  const [favoriteItems, setFavoriteItems] = useState([]); // Данные в избранном

  useEffect(() => {
    axios.get('https://62bb481d7bdbe01d529b55db.mockapi.io/Favorite').then((res) => {
      setFavoriteItems(res.data);
    });
    // Получить содержимое блока "Все кроссовки" и обновить `items`
  }, []); // Код будет вызываться только в случае, если что-то изменится в выше указанных массивах
  // <--- Действия после того, как какие-либо данные изменились

  const toAddCart = (obj) => {
    if (favoriteItems.find((el) => el.title === obj.title)) {
      return null;
      // contentItems.find((el) => el.title === obj.title)
    } else {
      axios.post('https://62bb481d7bdbe01d529b55db.mockapi.io/Favorite', obj)
      // При клике на добавление товара в блоке "Все кроссовки" добавляет его на бэк в Корзину
      setFavoriteItems((prev) => [...prev, obj]);
    }
    // Ищет объект, передаваемый в obj по title и если он уже существует в массиве - ещё раз туда его не записывает
  };
  // AddCart содержит данные из onPlus в obj и в себе выполняет обновление компонента contentItems в виде добавления к нему всех взятых в себя параметров (obj)

  const onFavorite = (obj) => {
    if (favoriteItems.find((el) => el.title === obj.title)) {
      return null;
      // contentItems.find((el) => el.title === obj.title)
    } else {
      axios.post('https://62bb481d7bdbe01d529b55db.mockapi.io/Favorite', obj)
      // При клике на добавление товара в блоке "Все кроссовки" добавляет его на бэк в Корзину
      setFavoriteItems((prev) => [...prev, obj]);
    }
  }

  return (

    <div className='wrapper clear'>
      <Header />
      <div className='myFavorites'>
        <button>
          <img src="img/arrowLeft.png" alt="" />
        </button>
        <h1 className="allsneakers">
          Мои закладки
        </h1>
      </div>
      <div className="filterSneakers">
        {favoriteItems
          .map((value, i) => (
            <Content key={i} onHeart={obj => onFavorite(obj)} onPlus={(obj) => toAddCart(obj)} {...value} />
            // onPlus берёт из Content -> onPlus объект(obj): { title, price, imageUrl } и передает его в функцию AddCart()
          ))}
      </div>
    </div>
  )
};

export default Favorite;
