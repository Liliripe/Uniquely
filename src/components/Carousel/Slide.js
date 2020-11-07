import React from 'react'
import { Link } from 'gatsby'
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
                    <div>
                        <h5>Featured Destination</h5>
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                        <Link to={slug}>
                            <span className="outer">
                                <span className="inner">View Destination</span>
                            </span>
                        </Link>
                    </div>
                </StyledContent>
            </BackgroundImage>
        </StyledSlide>
    )
}

export default Slide
