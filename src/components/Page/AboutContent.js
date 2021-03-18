import React from 'react'

import Wrapper from '../Wrapper'
import Feature from '../Feature'
import { StyledRow, StyledCol, Title, Subtitle, Content, StyledButton } from './style'

const AboutContent = ({ title, subtitle, image, buttonText, buttonLink, children }) => {
    return (
        <>
            <Wrapper>
                <StyledRow>
                    <StyledCol xs={12} md={6}>
                        <Subtitle>{subtitle}</Subtitle>
                        <Title>{title}</Title>
                        <Content dangerouslySetInnerHTML={{ __html: children }} />
                        <StyledButton fade to={buttonLink}>{buttonText}</StyledButton>
                    </StyledCol>

                    <StyledCol xs={12} md={6}>
                        <img src={image} title={title} />
                    </StyledCol>
                </StyledRow>
            </Wrapper>

            <Feature subtitle="Featured Destination" />
        </>
    )
}

export default AboutContent
