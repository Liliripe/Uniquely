import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { 
    StyledRow, 
    StyledCol, 
    StyledTitle, 
    StyledContent, 
    StyledButton 
} from './style'

const Content = ({
    title,
    content,
    categories,
    date,
    bookingURL
}) => {
    return (
        <StyledRow>
            <StyledCol xs={12} md={9}>
                <StyledTitle>{title}</StyledTitle>
                <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
            </StyledCol>

            <StyledCol sidebar="yes" xs={12} md={3}>
                <ul>
                    <li>
                        <h6>Category: </h6>
                        {categories && categories.length ? (
                            categories.slice(2, 3).map(category => (
                                <AniLink key={`${category.slug}cat`} to={`/categories/${category.slug}/`}>
                                    <span>{category.name}</span>
                                </AniLink>
                            ))
                        ) : null}
                    </li>
                    <li>
                        <h6>Date: </h6>
                        <span>{date}</span>
                    </li>
                </ul>
                <StyledButton fade to={bookingURL}>Book Now</StyledButton>
            </StyledCol>
        </StyledRow>
    )
}

export default Content
