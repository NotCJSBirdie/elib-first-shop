import React, {useState} from 'react'
import { productImage } from '../../features/slideritem'
import BtnSlider from './BtnSlider'
import './Slider.css'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const productImageLen = Number(productImage.length)


    const nextSlide = () => {
        if(slideIndex !== productImage.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === productImage.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex -1)
        }else if (slideIndex === 1) {
            setSlideIndex(productImage.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {productImage.map((image, index) => (
                <div key={image.id} 
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                    <img src={image.image} />
                </div>
            ))}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
                
                <div 
                className="container-dots">
                    {Array.from({length: productImageLen}).map((item, index) => (
                        <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                    ))}
                </div>
       
        </div>
    )
}

export default Slider
