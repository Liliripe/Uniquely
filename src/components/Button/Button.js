import React from 'react'

import { StyledButton } from './style'

const Button = ({ slug, title, type }) => {
    return (
        <>
            <StyledButton to={slug} type={type} fade>
                <span>{title}</span>
            </StyledButton>
        </>
    )
}

export default Button
