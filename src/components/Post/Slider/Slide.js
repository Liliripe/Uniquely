import React from 'react'

import { StyledImage } from './style'

const Slide = ({ key, name, image }) => {
    return (
        <div key={key}>
            <StyledImage 
                Tag="div"
                fluid={image} 
                alt={name} 
            />
        </div>
    )
}

export default Slide
