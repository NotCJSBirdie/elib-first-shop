import React, { useState } from "react";

import selectedItemOne from "../../images/productPage/SelectedItem-1.png";
// small
import selectedSmallItemTwo from "../../images/productPage/Selected-item-2.png";
import selectedSmallItemThree from "../../images/productPage/Selected-item-3.png";
import selectedSmallItemFour from "../../images/productPage/Selected-item-4.png";

// big
import selectedItemTwo from "../../images/productPage/Selected-item-4.JPG";
import selectedItemThree from "../../images/productPage/Selected-item-3.JPG";
import selectedItemFour from "../../images/productPage/Selected-item-2.JPG";

import star from "../../images/star.png";
import emptyStar from "../../images/emptyStar.png";
import heart from "../../images/heart.png";
import newPoshta from "../../images/newPoshta.png";
import meets from "../../images/meets.png";

import Slider from '../../component/Slider/Slider'

const Selectedsub = ({executeScroll, descriptionRef, charasteristicRef}) => {
  const [item, setItem] = useState(selectedItemOne);

  return (
    <div className="selectedItem">
      <div className="selectedItem-title">
        <h2>
          Аналоговый 4-дюймовый видеодомофон с сенсорными кнопками Slinex SQ-04
          Black
        </h2>
      </div>
      <div className="SelectedItem-tab">
        <ul>
          <li className="active">Основная информация</li>
          <li onClick={() => executeScroll(descriptionRef)}>Описание</li>
          <li onClick={() => executeScroll(charasteristicRef)}>Характеристики</li>
          <li>Отзывы</li>
        </ul>
      </div>


      <div className="SelectedItem-preview phone">
        <div className="SelectedItem-slider">
      <Slider />
      </div>
        <div className="SelectedItem-images">
          <div className="choose-image">
            <img
              onMouseEnter={() => setItem(selectedItemTwo)}
              src={selectedSmallItemTwo}
              alt="two"
            />
            <img
              onMouseEnter={() => setItem(selectedItemThree)}
              src={selectedSmallItemThree}
              alt="three"
            />
            <img
              onMouseEnter={() => setItem(selectedItemFour)}
              src={selectedSmallItemFour}
              alt="four"
            />
          </div>
          <div className="selected-image">
            <img src={item} alt="two" />
          </div>
        </div>

        
       

        <div className="SelectedItem-buyInfo">
          <div className="SelectedItem-rate-smallInfo">
            <div className="SelectedItem-rate">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={emptyStar} alt="star" />

              <span>(61)</span>
            </div>

            <div className="SelectedItem-smallInfo">
              <p>
                Объектив 2.8 мм / Угол обзора 112 град. / Wi-Fi / MicroSD /
                Микрофон / Динамик / Облачное хранилище / Подсветка 10 метров /
                Детектор движения
              </p>
            </div>

            <div className="SelectedItem-price">
              <div className="price">
                <span>7000</span>
                <small>₴</small>
              </div>

              <div>

              <button className="btn-phone">Купить</button>
              <button>В один клик</button>

              <img src={heart} alt="Like" />

              </div>
            </div>
          </div>

          <div className="SelectedItem-deliver">
            <h2>Доставка:</h2>
            <div className="deliver-info">
              <div className="deliver-info-logo">
                <img src={newPoshta} alt="НОВА ПОШТА" />
                <span className="deliver-info-pc">Доставка “Нова пошта”</span>
              </div>
              <div className="deliver-info-del">
              <span className="deliver-info-phone">Доставка “Нова пошта”</span>
              <span>безкоштовно</span>
              </div>
            </div>

            <div className="deliver-info">
              <div className="deliver-info-logo">
                <img src={meets} alt="meets" />
                <span className="deliver-info-pc">Самовывоз з Meets</span>
              </div>
              <div className="deliver-info-del">
              <span className="deliver-info-phone">Доставка “Нова пошта”</span>
              <span>безкоштовно</span>
              </div>
            </div>

            <div className="deliver-info">
              <div className="deliver-info-logo">
                <img src={newPoshta} alt="НОВА ПОШТА" />
                <span className="deliver-info-pc">Доставка курьером “Нова пошта”</span>
              </div>
              <div className="deliver-info-del">
              <span className="deliver-info-phone">Доставка “Нова пошта”</span>
              <span>49₴</span>
              </div>
            </div>

            <div className="deliver-info">
              <div className="deliver-info-logo">
                <img src={meets} alt="meets" />
                <span className="deliver-info-pc">Самовывоз з “Укрпошта”</span>
              </div>
              <div className="deliver-info-del">
              <span className="deliver-info-phone">Доставка “Нова пошта”</span>
              <span>безкоштовно</span>
              </div>
            </div>

            <div className="deliver-info">
              <div className="deliver-info-logo">
                <img src={meets} alt="meets" />
                <span className="deliver-info-pc">Доставка курьером “Укрпошта”</span>
              </div>
              <div className="deliver-info-del">
              <span className="deliver-info-phone">Доставка “Нова пошта”</span>
              <span>29₴</span>
              </div>
            </div>
          </div>

          <div className="SelectedItem-pay">
            <h4>Оплата:</h4>
            <span>
              Готівкою, Безготівковими, VISA/Mastercard, GooglePay, ApplePay
            </span>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Selectedsub;
