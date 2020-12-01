import React from 'react'

import Wrapper from '../../Wrapper'
import { StyledUl, StyledLi, StyledLink } from './style'

const Navigation = ({ category, children }) => {
    return (
        <Wrapper>
            <StyledUl>
                <StyledLi>
                    <StyledLink fade to="/categories/destinations" active={category == 'Destinations' ? 'active' : ''}>
                        Show All
                    </StyledLink>
                </StyledLi>
                {children}
            </StyledUl>
        </Wrapper>
    )
}

export default Navigation
