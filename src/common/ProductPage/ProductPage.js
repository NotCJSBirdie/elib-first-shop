import React, { useRef } from 'react'
import Charasteristics from './Charasteristics'
import Description from './Description'
import Selectedsub from './Selectedsub'

import './ProductPage.css'

const ProductPage = () => {
    const description = useRef(null)
    const charasteristic = useRef(null)
    const executeScroll = (ref) => ref.current.scrollIntoView()
    
    return (
        <div>
            <Selectedsub executeScroll={executeScroll} descriptionRef={description} charasteristicRef={charasteristic} />

            <div ref={description} className="selectedItemAbout">
                <Description />
            </div>

            <div ref={charasteristic}>
                
            <Charasteristics />
            </div>
        </div>
    )
}

export default ProductPage
