import { useParams } from 'react-router';
import { useGetProductQuery } from '../../services/products/products';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartList } from '../../features/test';
import styles from './item.module.css';

const Item = () => {
  const { id } = useParams();
  const { data = {}, isLoading } = useGetProductQuery(id);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartList);

  return (
    <div className={styles.wrapper}>
      <img src={data.image} alt="img" />
      <p>{data.price}</p>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <p>{data.rating?.rate}</p>
      <button>buy</button>
    </div>
  );
};

export default Item;
