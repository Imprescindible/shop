import { useDispatch, useSelector } from 'react-redux';
import { updateCartList } from '../features/test';

const useBuy = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartList);
  const onBuy = (item) => {
    const isExistInCart = cart.some((el) => el.id === item.id);
    let arrayWithNewItem = [];
    if (isExistInCart) {
      arrayWithNewItem = cart.map((el) =>
        el.id === item.id ? { ...el, count: el.count + 1 } : el,
      );
    } else arrayWithNewItem = [...cart, { ...item, count: 1 }];
    dispatch(updateCartList(arrayWithNewItem));
  };

  return { onBuy };
};
export default useBuy;
