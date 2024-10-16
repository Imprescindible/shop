import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Item from './pages/item/item';
import Favourite from './pages/favourite/favourite';
import Home from './pages/home/home';
import Header from './components/header';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import './App.css';
import PrivateRoute from './routes/privateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/favorite" element={<Favourite />} />
            <Route exact path="/shop-item/:id" element={<Item />} />
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
