import useApi from '../../custom-hooks/use-api';
import styles from './home.module.css';
const Home = () => {
  const { data, isLoading } = useApi('https://fakestoreapi.com/products', []);
  console.log(data);
  return (
    <>
      <div className={styles.wrapper}>
        {data.map((item) => (
          <div className={styles.card}>
            <img src={item.image} alt="product" />
            <h1 title={item.title}>{item.title}</h1>
            <p>{item.price}</p>
            <button>buy</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
