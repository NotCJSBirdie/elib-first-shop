import React, { useState } from 'react'
import './Profile.css'

import ava from "../../images/avatar.png";
import LikedItem from '../LikedPage/LikedItem';
import { orders } from '../../features/orders';
import ProfileEdit from './ProfileEdit';

const Profile = () => {
    const [editProfile, setEditProfile] = useState(false)


    return (
        <div>
            {
                editProfile 
                ?
                    <ProfileEdit />
                :
                <div className="profilePage">
            <h2>Кабинет покупателя</h2>
            <div className="profilePage-subTitle">
                <h3>Информация о пользователе</h3>
                <span onClick={() => setEditProfile(true)}>Изменить</span>
            </div>
            <div className="personalInfo-info">
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

        <div className="profilePage-order">
            <h3>Заказы</h3>
            <div className="order-buttons">
                <button className="active">{`Все (7)`}</button>
                <button>{`Выполнены (6)`}</button>
                <button>{`Отменены (1)`}</button>
                <button>{`В работе (0)`}</button>
            </div>

            </div>
            {orders.map(item => (
                <LikedItem key={item.id} image={item.image} title={item.title} price={item.price} done={item.done} btnText={'Добавить отзыв'} />
            ))}

        </div>
            }
        </div>
    )
}

export default Profile
