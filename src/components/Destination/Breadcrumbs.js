import React from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Wrapper from '../Wrapper'
import { StyledImage, OuterWrapper, StyledBreadcrumb, StyledIcon } from './style'

const Breadcrumbs = ({ title, categories, banner }) => {
    return (
        <>
            <StyledImage background={banner}>
                <OuterWrapper>
                    <Wrapper>
                        <h2>{title}</h2>
            
                        {categories && categories.length ? (
                            <ul>
                                <li>Destinations / </li>
                                {categories.slice(0, 1).map(category => (
                                    <li key={`${category.slug}cat`}>
                                        <AniLink to={`/categories/${category.slug}/`}>
                                            {category.name}
                                        </AniLink>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </Wrapper>
                </OuterWrapper>
            </StyledImage>

            <Wrapper>
                <StyledBreadcrumb>
                    <AniLink fade to="/categories/destinations">
                        <StyledIcon icon={faAngleLeft} />
                        <span>Back to All Destinations</span>
                    </AniLink>
                </StyledBreadcrumb>
            </Wrapper>
        </>
    )
}

export default Breadcrumbs
