import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
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
export const StyledBox = styled.div`
    max-width: 440px;
    width: 100%;
`
export const StyledSubtitle = styled.p`
    text-transform: uppercase;
    font-size: 10.5px;
    letter-spacing: 1.7px;
    margin-bottom: 10px;
    font-weight: 500;
`
export const StyledTitle = styled.h2`
    font-size: 44px;
    margin-bottom: 20px;
    font-weight: 400;
`
export const StyledExcerpt = styled.div`
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 40px;
`
