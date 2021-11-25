import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import ProductPage from './common/ProductPage/ProductPage';
import GenrePage from './common/GenrePage/GenrePage';
import ArticlePage from './common/ArticlePage/ArticlePage';
import ArticleMenuPage from './common/ArticleMenuPage/ArticleMenuPage';
import ButtonTest from './ButtonTest';
import Header from './Header';
import Liked from './common/LikedPage/Liked';
import Profile from './common/ProfilePage/Profile';
import Basket from './common/Basket/Basket';
import { useState } from 'react';

function App() {

  const [basket, setBasket] = useState(false)

  function openBusket() {
    setBasket(prev => !prev)
  }

  return (
    <Router>
      <Header openBusket={openBusket} />
      
    <div className="App">

    <Routes>

      <Route exact path="/" element={<ProductPage />} />
      <Route path="/genre" element={<GenrePage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/articleMenu" element={<ArticleMenuPage />} />
      <Route path='/liked' element={<Liked />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
      <ButtonTest />

      {basket ? <div className="basket">
        <div>
      <Basket openBusket={openBusket} />
      </div>
      </div>
      : null}
    </div>
    </Router>
  );
}

export default App;
