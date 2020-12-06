import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'

export const StyledContainer = styled(Container)`
    padding-right: 0;
    padding-left: 0;
`
export const StyledCol = styled(Col)`
    margin-bottom: 80px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        min-height: 250px !important;
    }
`
export const StyledImage = styled(BackgroundImage)`
    min-height: 450px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        min-height: 150px !important;
    }
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
export const StyledCategory = styled.p`
    margin: 18px 0 5px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 11px;
    font-weight: 500;
    opacity: 0.95;
`
export const StyledBackground = styled.div`
    width: 100%;
    height: 170px;
    margin: 0 0 15px;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.background});
    position: relative;

    ::after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.65);
        z-index: 3;
    }
`
export const OuterWrapper = styled.div`
    position: relative;
    z-index: 4;
    width: 100%;
    height: 100%;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: space-between;
    }

    ul {
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 2px;
        font-weight: 600;

        @media screen and (max-width: ${props => props.theme.responsive.medium}) {
            display: none;
        }

        li {
            display: inline-block;
            padding-left: 10px;
        }
    }
`
export const StyledBreadcrumb = styled.div`
    margin-bottom: 35px;

    a {
        font-size: 9.7px;
        text-transform: uppercase;
        letter-spacing: 1.4px;
        font-weight: 600;
    }
`
export const StyledIcon = styled(FontAwesomeIcon)`
    margin-right: 7px;
`
export const MainImage = styled(Image)`
    max-width: 100%;
    min-height: 600px;
    margin-bottom: 20px;
`
export const SecondaryImage = styled(BackgroundImage)`
    max-width: 100%;
    min-height: 120px;
    margin-bottom: 15px;
`
