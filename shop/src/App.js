import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Item from './pages/item/item';
import Favourite from './pages/favourite/favourite';
import Home from './pages/home/home';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/favorite" element={<Favourite />} />
          <Route exact path="/shop-item/:id" element={<Item />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
