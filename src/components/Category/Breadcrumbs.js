import React from 'react'

import Wrapper from '../Wrapper'
import { StyledImage, OuterWrapper } from './style'

const Breadcrumbs = ({ title, image }) => {
    return (
        <>
            <StyledImage background={image}>
                <OuterWrapper>
                    <Wrapper>
                        <h2>Browse {title}</h2>
                    </Wrapper>
                </OuterWrapper>
            </StyledImage>
        </>
    )
}

export default Breadcrumbs
