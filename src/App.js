import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import ProductPage from './common/ProductPage/ProductPage';
import GenrePage from './common/GenrePage/GenrePage';
import ArticlePage from './common/ArticlePage/ArticlePage';
import ArticleMenuPage from './common/ArticleMenuPage/ArticleMenuPage';
import ButtonTest from './ButtonTest';

function App() {
  return (
    <Router>
    <div className="App">

    <Routes>
      <Route exact path="/" element={<ProductPage />} />
      <Route path="/genre" element={<GenrePage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/articleMenu" element={<ArticleMenuPage />} />

    </Routes>
      <ButtonTest />
      
    </div>
    </Router>
  );
}

export default App;
