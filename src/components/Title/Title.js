import React from 'react'

import { StyledTitle } from './style'

const Title = ({ title, subtitle, align }) => {
    return (
        <StyledTitle style={{ textAlign: align }}>
            <p>{subtitle}</p>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </StyledTitle>
    )
}

export default Title
