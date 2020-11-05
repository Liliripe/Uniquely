import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import { StyledSlide, StyledContent } from './style'

const Slide = ({ key, title, slug, excerpt, image }) => {
    return (
        <StyledSlide key={key}>
            <BackgroundImage
                Tag="section"
                fluid={image}
            >
                <StyledContent>
                    <h2>{title}</h2>
                    <h3>{slug}</h3>
                    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
                </StyledContent>
            </BackgroundImage>
        </StyledSlide>
    )
}

export default Slide
