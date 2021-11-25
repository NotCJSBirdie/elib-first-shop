import React, { useEffect, useState } from 'react'
import './Basket.css'


import closeImg from '../../images/close.png'
import { basket } from '../../features/basket'
import BasketItem from './BasketItem'

const Basket = ({openBusket}) => {

    const [total, setTotal] = useState(0)

    function PriceAll(price) {
        setTotal(price)
    }

    return (
        <div className="basket">
            <div className="basket-header">
                <h3>Корзина</h3>
                <img onClick={() => openBusket()} src={closeImg} />
            </div>

            <div className='basket-items'>
            {basket.map((item, index) => (
                <BasketItem title={item.title} image={item.image} price={item.price} PriceAll={PriceAll} index={index+1}/>
            ))}
            </div>

            <div className="basket-footer">
                <span>{`К оплате: ${total}`}</span>
                <button>Оформить заказ</button>
            </div>
        </div>
    )
}

export default Basket
