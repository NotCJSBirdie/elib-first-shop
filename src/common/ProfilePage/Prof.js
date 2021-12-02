import React, { useState } from "react";
import "./ProfileEdit.css";

import ava from "../../images/avatar.png";
import arrowRightImg from "../../images/arrow-right.png";
import arrowDownImg from "../../images/arrow-d.png";
import { city } from "../../features/city";
import { regions } from "../../features/regions";

const Prof = ({ editL, editP }) => {
  const [viewRegion, setViewRegion] = useState(false);
  const [viewCity, setViewCity] = useState(false);

  const [arrowRegion, setArrowRegion] = useState(arrowRightImg);
  const [arrowCity, setArrowCity] = useState(arrowRightImg);

  const [regionName, setRegionName] = useState("Выберите регион");
  const [cityName, setCityName] = useState("Город");

  function hideCityList() {
    setViewCity(false);
    setArrowCity(arrowRightImg);
  }

  function viewCityList() {
    setViewCity(true);
    setArrowCity(arrowDownImg);
  }

  return (
    <div className="profileEditPage">
      <h2>Настройка профиля</h2>

      <div className="personalInfo">
        <h2>Персональные данные</h2>
        <div className="personalInfo-info pc">
          <img src={ava} />

          <div className="personalInfo-con">
            <div>
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Фамилия" />
            </div>
            <input type="text" placeholder="Номер телефона" />
            <input type="text" placeholder="Email" />
          </div>
        </div>

        {/* PHONE */}
        <div className="personalInfo-infoPhone">
          <img src={ava} />

          <div className="personalInfo-conPhone">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />

            <input type="text" placeholder="Номер телефона" />
            <input type="text" placeholder="Email" />
          </div>
        </div>
        {/* --- */}

        <div className="deliverInfo">
          <h2>Информация о доставке</h2>

          <div className="deliverInfo-info">
            <div>
              <div
                onClick={() => setViewRegion((prev) => !prev)}
                className="deliverInfo-region"
              >
                <div>
                  <span>{regionName}</span>
                  <img src={arrowRegion} />
                </div>

                {viewRegion ? (
                  <div className="chooseRegion">
                    <ul>
                      {regions.map((region) => (
                        <li
                          onClick={(e) => setRegionName(e.target.textContent)}
                        >
                          {region.city}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div
                onClick={() => {
                  setViewCity((prev) => !prev);
                }}
                className="deliverInfo-city"
              >
                <div>
                  <span>{cityName}</span>
                  <img src={arrowCity} />
                </div>

                {viewCity ? (
                  <div className="chooseCity">
                    <ul>
                      {city.map((city) => (
                        <li
                          key={city.id}
                          onClick={(e) => {
                            setCityName(e.target.textContent);
                          }}
                        >
                          {city.city}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>

            <input type="text" placeholder="Введите почтовый адрес" />
          </div>
        </div>
      </div>

      <div className="profileLogin">
        <h2>Логин и пароль</h2>
        <div className="profileLogin-login-password pc">
          <div className="profileLogin-in">
            <div>
              <input value="Логин" readOnly />
            </div>
            <span onClick={() => editL()}>Изменить логин</span>
          </div>

          <div className="profileLogin-in">
            <div>
              <input value="password" type="password" readOnly />
            </div>
            <span onClick={() => editP()}>Изменить пароль</span>
          </div>
        </div>

        <div className="profileLogin-login-password phone">
          <div className="profileLogin-in">
            <span className="log">Логин</span>
            <span onClick={() => editL()}>Изменить логин</span>
          </div>

          <div className="profileLogin-in">
            <span className="log">Пароль</span>
            <span onClick={() => editP()}>Изменить пароль</span>
          </div>
        </div>
      </div>

      <div className="delete-acc">
        <button>Удалить аккаунт</button>
      </div>
    </div>
  );
};

export default Prof;
