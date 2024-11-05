import { useSelector } from 'react-redux';

const Item = () => {
  const cart = useSelector((state) => state.cart.cartList);
  console.log(cart);

  return <></>;
};

export default Item;
