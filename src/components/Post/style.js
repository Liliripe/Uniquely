import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
export const StyledTitle = styled.h2`
    margin-bottom: 20px;
`
export const StyledContent = styled.div`
    font-size: 15px;
    margin-bottom: 50px;

    p {
        margin-bottom: 15px;
    }
`
export const StyledButton = styled(AniLink)`
    width: 100%;
    max-width: 250px;
    display: block;
    background-color: black;
    color: white;
    padding: 15px 20px;
    text-align: center;
    font-size: 11px;
    text-transform: uppercase; 
    letter-spacing: 1.8px;
    font-weight: 700;

    :hover {
        color: white;
    }
`
