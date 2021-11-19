import React from 'react'

const GenreItem = ({title, image}) => {
    return (
        <div className="genrePage-genre">
                <div className="genrePage-genre-image">
                    <img src={image} alt="" />
                </div>
                <h4>{title}</h4>
            </div>
    )
}

export default GenreItem
