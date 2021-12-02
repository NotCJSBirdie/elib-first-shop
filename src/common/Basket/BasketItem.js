import React, { useState } from 'react'
import './Basket.css'


const BasketItem = ({image, title, price, PriceAll}) => {
    const [num, setNum] = useState(1)
    const [priceI, setPriceI] = useState(price)

    if(num < 0) {
        setNum(0)
    }

    function increment() {
        setNum(
            prev => prev + 1
        )
    }

    function decrement() {
        setNum(
            prev => prev - 1
        )
    }

    
    let result = num * priceI


    return (
        <div className="basketItem">
            <div className="basket-pc">
            <div className='img-title'>
            <img src={image} />
            <h4>{title}</h4>
            </div>

            <div className="button-numb">
                <button onClick={decrement}>-</button>
                <span>{num}</span>
                <button onClick={increment}>+</button>
            </div>

            <span>{`${result}₴`}</span>

            </div>

            <div className="basket-phone">
            <div className='img-title'>
            <img src={image} />
            </div>
            
            <div className="basketitem-info">

            <h4>{title}</h4>

            <div className="current-price">

            <div className="button-numb">
                <button onClick={decrement}>-</button>
                <span>{num}</span>
                <button onClick={increment}>+</button>
            </div>
            <span>{`${result}₴`}</span>

            </div>

            </div>

            </div>
        </div>
    )
}

export default BasketItem
