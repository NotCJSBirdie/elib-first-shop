import React from 'react'
import starActiveImg from '../../images/star.png'
import starEmptyImg from '../../images/emptyStar.png'
import trashImg from '../../images/trash.png'

const LikedItem = ({image, title, price, done = false, btnText="Купить"}) => {
    return (
        <div className="likedPage-item">
            <div className="likedPage-item-con">
            <img src={image} />
            <div className="likedPage-item-desc">
                <h4>{title}</h4>
                <span>{price}</span>
            </div>
            
            <div className="likedPage-item-rate">
                {done ? <span>Выполнено</span>
                :<div><img src={starActiveImg} />
                <img src={starActiveImg} />
                <img src={starActiveImg} />
                <img src={starActiveImg} />
                <img src={starEmptyImg} /> </div>
                }
            </div>

            </div>

            <div className="likedPage-item-buy">
                <button>{btnText}</button>
                <img src={trashImg} />
            </div>
        </div>
    )
}

export default LikedItem
