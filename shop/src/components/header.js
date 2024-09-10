import cart from './cart3.png';
import styles from './header.module.css';
const Header = () => {
  return (
    <nav>
      <div className={styles.wrapper}>
        <img src={cart} alt="cart" className={styles.cart_icon} />
      </div>
    </nav>
  );
};

export default Header;
