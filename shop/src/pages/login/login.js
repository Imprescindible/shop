import { useForm } from 'react-hook-form';
import styles from './login.module.css';
import { Navigate, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsLogin } from '../../features/auth/auth';
import { useLoginMutation } from '../../services/auth/authApi';

const Login = () => {
  const [onLogin, { isLoading, isError }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogined } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ username, password }) => {
    onLogin({ username, password })
      .unwrap()
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        dispatch(updateIsLogin(true));
        navigate('/');
      });
  };

  if (isLogined) return <Navigate to={'/'} />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="User Name"
        {...register('username', { required: true })}
      />
      {errors.username && (
        <p style={{ color: 'red' }}>Please fill the User Name</p>
      )}
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {errors.password && (
        <p style={{ color: 'red' }}>Please fill the password</p>
      )}
      {isError && <p style={{ color: 'red' }}>incorrect</p>}
      <input type="submit" className={styles.button} />
    </form>
  );
};

export default Login;
