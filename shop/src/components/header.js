import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Cart from './cart/cart';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsLogin } from '../features/auth/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.auth.isLogined);
  const logOut = () => {
    dispatch(updateIsLogin(false));
    localStorage.removeItem('token');
  };
  return (
    <nav>
      <Link to="/login">Login Page</Link>
      <Link to="/favorite">Favorite Page</Link>
      <Link to="/">Home Page</Link>
      {isLogined && (
        <p>
          <button onClick={logOut}>Log Out</button>
        </p>
      )}

      <div className={styles.wrapper}>
        <Cart />
      </div>
    </nav>
  );
};

export default Header;
