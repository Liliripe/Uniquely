import React from 'react'

import { StyledTitle } from './style'

const Title = ({ title, subtitle, align, padding }) => {
    return (
        <StyledTitle style={{ textAlign: align, padding: padding }}>
            <p>{subtitle}</p>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </StyledTitle>
    )
}

export default Title
