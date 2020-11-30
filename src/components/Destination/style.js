import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const StyledImage = styled.div`
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
export const StyledRow = styled(Row)`
    margin: 40px 0 60px;
    align-items: center;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
       margin-top: 0;
    }
`
export const StyledCol = styled(Col)`
    padding: ${({sidebar}) => 
        sidebar === 'yes' && '0 0 0 40px' ||
        '0'
    };

    ul {
        margin-bottom: 40px;

        li {
            margin-bottom: 5px;
        }
    }
    h6 {
        display: inline-block;
        padding-right: 10px;
    }
    span {
        opacity: 0.8;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
       padding: 0 !important;
       margin-top: 40px; 
    }
`
export const StyledTitle = styled.h2`
    margin-bottom: 20px;
`
export const StyledContent = styled.div`
    font-size: 15px;
`
export const StyledButton = styled(AniLink)`
    width: 100%;
    display: block;
    background-color: black;
    color: white;
    padding: 15px 20px;
    text-align: center;
    font-size: 11px;
    text-transform: uppercase; 
    letter-spacing: 1.8px;
    font-weight: 700;
`
