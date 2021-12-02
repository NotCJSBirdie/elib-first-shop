import React from 'react'
import './Slider.css'
import rightArrow from '../../images/right-arr-slide.png'

const BtnSlider = ({direction, moveSlide}) => {
    return (
        <button
        onClick={moveSlide}
        className={direction === 'next' ? 'btn-slide next' : "btn-slide prev"}
        >
            <img src={rightArrow} />
        </button>
    )
}

export default BtnSlider
