import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { MainImage, SecondaryImage } from './style'

const Images = ({ featuredimg, img2, img3 }) => {
    return (
        <Col xs={12} md={6}>
            <Row>
                <Col xs={4} md={3}>
                    <SecondaryImage fluid={img2} />
                    <SecondaryImage fluid={img3} />
                </Col>

                <Col xs={8} md={9}>
                    <MainImage fluid={featuredimg} />
                </Col>
            </Row>
        </Col>
    )
}

export default Images
