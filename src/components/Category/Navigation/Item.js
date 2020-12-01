import React from 'react'

import { StyledLi, StyledLink } from './style'

const Item = ({ category, name, id, slug }) => {
    return (
        <StyledLi key={id}>
            <StyledLink fade to={slug} active={category == name ? 'active' : 'not-active'}>{name}</StyledLink>
        </StyledLi>
    )
}

export default Item
