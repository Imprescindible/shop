import styles from './cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, Modal } from '@mui/material';
import { useState } from 'react';
import { updateCartList } from '../../features/test';

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { cartList } = useSelector((state) => state.cart);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { totalCount, totalAmount } = cartList.reduce(
    (acc, cur) => ({
      totalCount: acc.totalCount + cur.count,
      totalAmount: +(acc.totalAmount + cur.price * cur.count).toFixed(2),
    }),
    { totalCount: 0, totalAmount: 0 },
  );

  const deleteItem = (id) => {
    const filtered = cartList.filter((item) => {
      return item.id !== id;
    });
    dispatch(updateCartList(filtered));
  };

  const subtrack = (id) => {
    const modified = cartList.map((item) =>
      item.id === id ? { ...item, count: Math.max(1, item.count - 1) } : item,
    );
    dispatch(updateCartList(modified));
  };

  const addItem = (id) => {
    const modified = cartList.map((item) =>
      item.id === id
        ? { ...item, count: Math.min(item.quantity, item.count + 1) }
        : item,
    );
    dispatch(updateCartList(modified));
  };
  return (
    <div>
      <IconButton aria-label="cart" onClick={handleOpen}>
        <Badge badgeContent={totalCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="modal_container">
          <div className={styles.container}>
            <div className={styles.title}>
              <p>Корзина</p>
              <button onClick={handleClose} className={styles.closeButton}>
                X
              </button>
            </div>
            <div className={styles.content}>
              {cartList.map((item) => {
                return (
                  <div className={styles.contentItem}>
                    <img
                      src={item.image}
                      alt="pic"
                      style={{ width: '100px', height: '150px' }}
                    />

                    <p className={styles.description}>{item.title}</p>
                    <p>{item.price}</p>
                    <div>
                      количество:
                      <button
                        disabled={item.count === 1}
                        className={styles.closeButton}
                        onClick={() => subtrack(item.id)}>
                        -
                      </button>
                      {item.count}
                      <button
                        disabled={item.count === 20}
                        className={styles.closeButton}
                        onClick={() => addItem(item.id)}>
                        +
                      </button>
                      <button onClick={() => deleteItem(item.id)}>
                        delete
                      </button>
                    </div>
                  </div>
                );
              })}
              {!cartList.length && (
                <p>
                  <button onClick={() => setOpen(false)}>
                    Return for purchase
                  </button>
                </p>
              )}
            </div>
            <p>total amount: {totalAmount}$ </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
