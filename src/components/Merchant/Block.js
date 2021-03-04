import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { StyledCol, SmallText, StyledPrice } from './style'

const Block = ({ key, title, slug, price, description }) => {
    return (
        <StyledCol xs={12} md={6} lg={4} key={key}>
            <AniLink to={slug} fade>
                <div>
                    <SmallText>Package Type</SmallText>
                    <h2>{title}</h2>
                    <StyledPrice>
                        ${price}
                        <span>/ mo</span>
                    </StyledPrice>
                    <SmallText>Includes</SmallText>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </AniLink>
        </StyledCol>
    )
}

export default Block
