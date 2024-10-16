import { useParams } from 'react-router';
import { useGetProductQuery } from '../../services/products/products';
import { useSelector } from 'react-redux';

import styles from './item.module.css';
import useBuy from '../../custom-hooks/use-buy';

const Item = () => {
  const { id } = useParams();
  const { data = {}, isLoading } = useGetProductQuery(id);
  const { onBuy } = useBuy();

  const cart = useSelector((state) => state.cart.cartList);
  console.log(cart);

  return (
    <div className={styles.wrapper}>
      <img src={data.image} alt="img" />
      <p>{data.price}</p>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <p>{data.rating?.rate}</p>
      <button onClick={(e) => onBuy(data)}>buy</button>
    </div>
  );
};

export default Item;
