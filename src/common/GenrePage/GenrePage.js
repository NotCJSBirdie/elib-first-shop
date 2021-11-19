import React from 'react'
import { genre, questions } from '../../features/genre'


import GenreItem from './GenreItem'

import './GenrePage.css'
import GenreQuestion from './GenreQuestion'

const GenrePage = () => {
    return (
        <main className="genrePage">
        <h2 className="title">Домофоны</h2>

        <div className="genrePage-genres">
            
        {genre.map((item) => (
            <GenreItem key={item.id} title={item.title} image={item.image} />
        ))}
            
        </div>

        <div className="genrePage-questions">
            <h2>Часто задаваемые вопросы</h2>

            <div className="genrePage-questions-container">

            {questions.map(item => (
                <GenreQuestion key={item.id} title={item.title} />
            ))}

        </div>
        </div>
    </main>
    )
}

export default GenrePage
