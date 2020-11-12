import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BackgroundImage from 'gatsby-background-image'

export const StyledContainer = styled(Container)`
    padding: 40px 0;
`
export const StyledBanner = styled(BackgroundImage)`
    width: 100%;
    min-height: 500px;
    padding: 20px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const StyledSubtitle = styled.p``
export const StyledTitle = styled.h2``
export const StyledExcerpt = styled.div``
export const StyledButton = styled(AniLink)``
