import React from 'react'

import { StyledButton } from './style'

const Button = ({ slug, title, type }) => {
    return (
        <>
            <StyledButton to={slug} type={type} fade>
                <span className="outer">
                    <span className="inner">{title}</span>
                </span>
            </StyledButton>
        </>
    )
}

export default Button
