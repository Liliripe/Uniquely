import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BackgroundImage from 'gatsby-background-image'

export const StyledCol = styled(Col)`
    position: relative;
    min-height: 500px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        min-height: 350px !important;
    }
`
export const StyledBackground = styled(BackgroundImage)`
    min-height: 400px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        min-height: 250px !important;
    }
`
export const StyledText = styled.div`
    margin: 15px 0 25px;
`
export const StyledTitle = styled.h5``
export const StyledSubtitle = styled.p`
    opacity: 0.9;
`
export const StyledLink = styled(AniLink)`
    opacity: 1 !important;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid ${props => props.theme.colors.black};
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-end;
    padding: 30px;
    opacity: 0;
    transition: opacity 0.3s;

    :hover {
        opacity: 1;
    }
`
export const StyledButton = styled.button`
    width: 70%;
    padding: 13px 15px;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 1.7px;
    font-weight: 600;
    font-size: 11px;
    text-align: center;
    border: 0;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        width: 98%;
    }
`
