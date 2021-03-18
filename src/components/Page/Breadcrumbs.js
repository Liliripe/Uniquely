import React from 'react'

import Wrapper from '../Wrapper'
import { StyledImage, OuterWrapper } from './style'

const Breadcrumbs = ({ name, banner }) => {
    return (
        <>
            <StyledImage background={banner}>
                <OuterWrapper>
                    <Wrapper>
                        <h2>{name}</h2>
                    </Wrapper>
                </OuterWrapper>
            </StyledImage>
        </>
    )
}

export default Breadcrumbs
