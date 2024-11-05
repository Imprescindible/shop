import { useGetAllProductsQuery } from '../../services/products/productsApi';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data = [], isLoading } = useGetAllProductsQuery();
  console.log(data, isLoading);
  return (
    <div className={styles.wrapper}>
      {data.map((item) => (
        <Link
          to={`/shop-item/${item.id}`}
          key={item.id}
          className={styles.card}>
          <img src={item.image} alt="pic" />
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.rating.rate}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
