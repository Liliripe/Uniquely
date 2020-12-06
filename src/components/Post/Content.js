import React from 'react'
import Col from 'react-bootstrap/Col'

const Content = ({ 
    title, 
    content,
    categories,
    date,
    bookingURL
}) => {
    return (
        <Col xs={12} md={6}>
            {title}<br />
            {content}<br />
            {categories && categories.length ? (
                categories.slice(2, 3).map(category => (
                    <p key={`${category.slug}cat`} to={`/categories/${category.slug}/`}>
                        <span>{category.name}</span>
                    </p>
                ))
            ) : null}<br />
            {date}<br />
            {bookingURL}
        </Col>
    )
}

export default Content
