import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { StyledBlock, StyledImage, Overlay, StyledSubtitle } from './style'

const Block = ({ key, title, slug, image }) => {
    return (
        <StyledBlock key={key}>
            <AniLink to={slug} fade>
                <StyledImage
                    Tag="section"
                    fluid={image}
                >
                    <Overlay>
                        <StyledSubtitle>{title}</StyledSubtitle>
                    </Overlay>
                </StyledImage>
            </AniLink>
        </StyledBlock>
    )
}

export default Block
