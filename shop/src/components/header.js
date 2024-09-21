import { Link } from 'react-router-dom';
import cart from './cart3.png';
import styles from './header.module.css';
import Cart from './cart/cart';

const Header = () => {
  return (
    <nav>
      <Link to="/login">Login Page</Link>
      <Link to="/favorite">Favorite Page</Link>
      <Link to="/">Home Page</Link>
      <Cart />

      <div className={styles.wrapper}>
        <img src={cart} alt="cart" className={styles.cart_icon} />
      </div>
    </nav>
  );
};

export default Header;
