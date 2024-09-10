import { useNavigate } from 'react-router';

const PageNotFound = () => {
  const handleClick = () => navigate('/');
  const navigate = useNavigate();
  return (
    <>
      Page not found
      <button onClick={handleClick}>Перейти на главную</button>
    </>
  );
};

export default PageNotFound;
