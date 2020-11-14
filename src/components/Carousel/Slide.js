import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import Button from '../Button'
import { StyledSlide, StyledContent } from './style'

const Slide = ({ key, title, slug, excerpt, image }) => {
    return (
        <StyledSlide key={key}>
            <BackgroundImage
                Tag="section"
                fluid={image}
            >
                <StyledContent>
                    <div>
                        <h5>Featured Destination</h5>
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                        <Button
                            slug={slug}
                            title="View Destination" 
                            type="solid"
                        />
                    </div>
                </StyledContent>
            </BackgroundImage>
        </StyledSlide>
    )
}

export default Slide
