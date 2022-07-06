import Content from '../components/Content';
import Header from '../components/Header';

const Favorite = ({ onFavorite, toAddCart, items }) => {

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
        {items
          .map((value, i) => (
            <Content key={i} favorited={true} onHeart={obj => onFavorite(obj)} onPlus={(obj) => toAddCart(obj)} {...value} />
            // onPlus берёт из Content -> onPlus объект(obj): { title, price, imageUrl } и передает его в функцию AddCart()
            // favorited передает значение избранного (true || false)
          ))}
      </div>
    </div>
  )
};

export default Favorite;
