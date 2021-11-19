import React from 'react'
import { Link } from 'react-router-dom'

const ButtonTest = () => {

    const styled = {
        link: {
            marginRight: '20px'
        }
    }

    return (
        <div>
            <Link style={styled.link} to="/">ProductPage</Link>
            <Link style={styled.link} to="/genre">genre</Link>
            <Link style={styled.link} to="/article">article</Link>
            <Link style={styled.link} to="/articleMenu">articleMenu</Link>
        </div>
    )
}

export default ButtonTest
