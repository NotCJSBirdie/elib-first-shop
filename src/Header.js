import React, { useState } from "react";
import "./Header.css"
import { Link } from 'react-router-dom'

import arrowDownImg from './images/arrow-down.png'
import menuImg from './images/menu.png'
import searchImg from './images/search.png'
import likeImg from './images/favorite.png'
import userImg from './images/user.png'
import basketImg from './images/basket.png'

import facebookImg from './images/soc/facebook.png'
import instagramImg from './images/soc/instagram.png'
import mailImg from './images/soc/mail.png'
import telegramImg from './images/soc/telegram.png'
import twitterImg from './images/soc/twitter.png'

const Header = ({openBusket}) => {
  const [contacts, setContacts] = useState(false)

  return (
    <header className="header">
      <div className="headerTop">

        <Link to="/"><h2>COMPANY NAME</h2> </Link>

        <div>
          <ul>
            <li>(097) 039 14 10</li>
            <li>(044) 039 14 10</li>
            <li>(050) 039 14 10</li>
          </ul>
        </div>

        <div onMouseEnter={() => setContacts(true)}
              onMouseLeave={() => setContacts(false)} 
        className="headerTop-contact">
          <div className='contact'>
            <span>Все контакты</span>
            <img src={arrowDownImg} />
            </div>

          { contacts 
            ? <div className="allContact">
            <ul>
              <li>(097) 039 14 10</li>
              <li>(050) 039 14 10</li>
              <li>(044) 039 14 10</li>
              <li><img src={mailImg} />Email: <a>companyneme@gmail.com</a></li>
              <li><img src={telegramImg} />Наш Telegram!</li>
              <li><img src={instagramImg} />Наш Instagram!</li>
              <li><img src={twitterImg} />Наш Twitter!</li>
              <li><img src={facebookImg} />Наш Facebook!</li>
            </ul>
            </div>
            : null}
        </div>

      </div>

      <div className="headerBottom">
        <div className="headerBottom-catalog-input">
        <div className="headerBottom-catalog">
            <img src={menuImg} />
            <span>Каталог товаров</span>
        </div>

        <div className="headerBottom-input">
          <div>
            <input type="text" placeholder="Поиск по сайту…" />
            <img src={searchImg} />
            </div>
        </div>
        </div>

        <div className="headerBottom-login">
            <span>Вход</span>
            <Link to="/liked"><img src={likeImg} /></Link>
            <Link to="/profile"><img className="headerBottom-login-profile" src={userImg} /></Link>
            <Link to="#" onClick={() => openBusket()}><img src={basketImg} /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
