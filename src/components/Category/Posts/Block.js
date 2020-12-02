import React from 'react'

import { Styledcol, StyledImage,StyledLink } from './style'

const Block = ({
    name,
    key,
    slug,
    image
}) => {
    return (
        <Styledcol xs={12} md={6} key={key}>
            <StyledImage 
                Tag="section"
                fluid={image}
            >
                <StyledLink fade to={slug}>
                    <h2>{name}</h2>
                </StyledLink>
            </StyledImage>
        </Styledcol>
    )
}

export default Block
