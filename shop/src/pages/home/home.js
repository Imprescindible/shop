import { useDispatch, useSelector } from 'react-redux';
import useApi from '../../custom-hooks/use-api';
import styles from './home.module.css';
import { useGetProductsAllQuery } from '../../services/products/products';
import { useNavigate } from 'react-router';
import { updateCartList } from '../../features/test';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartList);
  const {
    data = [],
    isLoading,
    isFetching,
    refetch,
  } = useGetProductsAllQuery();

  return (
    <>
      {isLoading ? (
        'isLoading...'
      ) : (
        <div className={styles.wrapper}>
          {data.map((item) => (
            <div
              onClick={() => navigate(`/shop-item/${item.id}`)}
              key={item.id}
              className={styles.card}>
              <img src={item.image} alt="product" />
              <h1 title={item.title}>{item.title}</h1>
              <p>{item.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(updateCartList([...cart, item]));
                }}>
                buy
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
