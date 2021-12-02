import React, { useState } from 'react'
import arrowRight from '../../images/arrow-right.png'

const GenreQuestion = ({title, reply}) => {
    const [replyView, setReplyView] = useState(false)

    return (
        <div className="genrePage-question">
            <div onClick={() => setReplyView(prev => !prev)}>
                <h3>{title}</h3>
                <img src={arrowRight} alt={title} />
            </div>
                {replyView ? <p>{reply}</p> : null}
            </div>
    )
}

export default GenreQuestion
