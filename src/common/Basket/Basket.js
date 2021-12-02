import React, { useEffect, useState } from 'react'
import './Basket.css'


import closeImg from '../../images/close.png'
import { basket } from '../../features/basket'
import BasketItem from './BasketItem'
import { useNavigate } from 'react-router'

const Basket = () => {
  const history = useNavigate()

    const [total, setTotal] = useState(0)

    function PriceAll(price) {
        setTotal(
            prev => prev + price
        )
    }

    return (
        <div className="basket">
            <div className="basket-header">
                <h3>Корзина</h3>
                <img onClick={() => history("/")} src={closeImg} />
            </div>

            <div className='basket-items'>
            {basket.map((item, index) => (
                <BasketItem title={item.title} image={item.image} price={item.price} PriceAll={PriceAll} index={index+1}/>
            ))}
            </div>

            <div className="basket-footer-pc">
                <span>{`К оплате: ${total}`}</span>
                <button>Оформить заказ</button>
            </div>

            <div className="basket-footer-phone">
                <div>
                <span>К оплате:</span>
                <span>{total}</span>
                </div>
                <button className="order">Оформить заказ</button>
                <button className="returnB">Вернутса к покупкам</button>
            </div>
        </div>
    )
}

export default React.memo(Basket)
