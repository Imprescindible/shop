import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = (props) => {
  const { isLogined } = useSelector((state) => state.auth);

  if (isLogined) return <Outlet {...props} />;
  else return <Navigate to={'/login'} />;
};
export default PrivateRoute;
