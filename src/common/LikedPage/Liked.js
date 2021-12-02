import React from "react";
import "./Liked.css";

import arrowRightImg from "../../images/arrow-right.png";
import searchImg from "../../images/search.png";
import LikedItem from "./LikedItem";
import { liked } from "../../features/liked";

const Liked = () => {
  return (
    <div className="likedPage">
      <h2>Избранное</h2>

      <div className="likedPage-category-search phone">
        <div className="likedPage-category">
          <div>
            <span>Категория товара</span>
            <img src={arrowRightImg} />
          </div>
        </div>
        <div className="likedPage-search">
          <input type="text" placeholder="Поиск по названию…" />
          <img src={searchImg} />
        </div>
      </div>

      {liked.map(item => (
          <LikedItem 
          key={item.id}
          image={item.image} 
          title={item.title}
          price={item.price}
          />
      ))}
    </div>
  );
};

export default Liked;
