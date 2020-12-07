import React from 'react'
import Col from 'react-bootstrap/Col'

import {
    StyledTitle,
    StyledContent,
    StyledButton
} from './style'

const Content = ({ 
    title, 
    content,
    bookingURL
}) => {
    return (
        <Col xs={12} md={6}>
            <StyledTitle>{title}</StyledTitle>
            <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
            <StyledButton fade to={bookingURL}>Book Now</StyledButton>
        </Col>
    )
}

export default Content
