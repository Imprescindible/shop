import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getName = (e) => {
    setName(e.target.value);
  };
  const signIn = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => getName(e)}
        />
        <button onClick={signIn}>Log in</button>
        {isLoggedIn && <div>Welcome {name}</div>}
      </div>
    </>
  );
};

export default Home;
