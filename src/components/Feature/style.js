import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import BackgroundImage from 'gatsby-background-image'

export const StyledContainer = styled(Container)`
    padding: 40px 0;
    position: relative;
`
export const StyledBanner = styled(BackgroundImage)`
    width: 100%;
    min-height: 500px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        max-height: 400px;
        min-height: 400px;
    }
`
export const StyledGradient = styled.div`
    position: relative;
    padding: 20px 100px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        max-height: 400px;
        min-height: 400px;
        padding: 20px;

        ::after {
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 1;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 100%, transparent 100%);
            z-index: 3;
        }
    }
`
export const StyledBox = styled.div`
    max-width: 440px;
    width: 100%;
    position: relative;
    z-index: 4;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        max-width: 100%;
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        a {
            .outer,
            .inner {
                border-color: white;
                color: white;

                :hover {
                    color: black;
                }
            }
        }
    }
`
export const StyledSubtitle = styled.p`
    text-transform: uppercase;
    font-size: 10.5px;
    letter-spacing: 1.7px;
    margin-bottom: 10px;
    font-weight: 500;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        color: white;
    }
`
export const StyledTitle = styled.h2`
    font-size: 44px;
    margin-bottom: 20px;
    font-weight: 400;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        margin-bottom: 50px;
        font-size: 50px;
        color: white;
    }
`
export const StyledExcerpt = styled.div`
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 40px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        display: none;
    }
`
