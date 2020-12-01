import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BackgroundImage from 'gatsby-background-image'
import Col from 'react-bootstrap/Col'

import { StyledImage } from './style'

const Block = ({
    name,
    key,
    slug,
    image
}) => {
    return (
        <Col xs={6} key={key}>
            <BackgroundImage 
                Tag="section"
                fluid={image}
            >
                <AniLink fade to={slug}>
                    <h2>{name}</h2>
                </AniLink>
            </BackgroundImage>
        </Col>
    )
}

export default Block
