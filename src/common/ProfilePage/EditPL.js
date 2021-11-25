import React from 'react'
import './EditPL.css'

import hideImg from '../../images/hide.png'
import closeImg from '../../images/close.png'

const EditPL = ({title = 'Изменение пароля', placeholder = 'пароль', forgot = true, edit}) => {
    return (
        <div className="EditPL">
            <h2>{title}</h2>

            <div className='EditPL-inputs'>

            <div>
                <input type="text" placeholder={`Текущий ${placeholder}`} />
                <img src={hideImg} />
            </div>

            <div>
                <input type="text" placeholder={`Новый ${placeholder}`} />
                <img src={hideImg} />
            </div>

            { forgot ? <span>Забыли пароль?</span> : null }
            </div>

            <button>СОХРАНИТЬ</button>
            
            <img onClick={() => edit()} src={closeImg} />
        </div>
    )
}

export default EditPL
