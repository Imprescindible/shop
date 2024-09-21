import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartList);
  console.log(cart);
  return <></>;
};

export default Cart;
