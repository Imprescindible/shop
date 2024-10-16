import styles from './home.module.css';
import { useGetProductsAllQuery } from '../../services/products/products';
import { useNavigate } from 'react-router';
import { ReactComponent as FavoriteIcon } from '../../assests/favorite.svg';
import useBuy from '../../custom-hooks/use-buy';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoriteList } from '../../features/test';

const Home = ({ isFavoritePage = false }) => {
  const navigate = useNavigate();
  const { favoriteList } = useSelector((state) => state.cart);
  const { onBuy } = useBuy();
  const dispatch = useDispatch();
  console.log(isFavoritePage);
  const { data = [], isLoading } = useGetProductsAllQuery(null, {
    skip: isFavoritePage,
  });

  return (
    <>
      {isLoading ? (
        'isLoading...'
      ) : (
        <div className={styles.wrapper}>
          {(isFavoritePage ? favoriteList : data).map((item) => {
            const isFavorite = favoriteList.some((el) => el.id === item.id);

            return (
              <div
                onClick={() => navigate(`/shop-item/${item.id}`)}
                key={item.id}
                className={styles.card}>
                <div className={styles.icon}>
                  <FavoriteIcon
                    style={{ width: 32, height: 32 }}
                    className={isFavorite ? styles.icon_red : null}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isFavorite) {
                        dispatch(
                          updateFavoriteList(
                            favoriteList.filter((el) => el.id !== item.id),
                          ),
                        );
                      } else {
                        dispatch(updateFavoriteList([...favoriteList, item]));
                      }
                    }}
                  />
                </div>

                <img src={item.image} alt="product" />
                <h1 title={item.title}>{item.title}</h1>
                <p>{item.price}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBuy(item);
                  }}>
                  buy
                </button>
              </div>
            );
          })}
        </div>
      )}
      {isFavoritePage && !favoriteList.length ? (
        <button onClick={() => navigate('/')}>return to homepage</button>
      ) : null}
    </>
  );
};

export default Home;
