import React from 'react'
import arrowRight from '../../images/arrow-right.png'

const GenreQuestion = ({title}) => {
    return (
        <div className="genrePage-question">
                <h3>{title}</h3>
                <img src={arrowRight} alt={title} />
            </div>
    )
}

export default GenreQuestion
