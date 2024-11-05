import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Item = () => {
  const cart = useSelector((state) => state.cart.cartList);
  const { id } = useParams();
  console.log(id);

  return <></>;
};

export default Item;
