import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Col from 'react-bootstrap/Col'

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 7px;
    width: 100%;

    ::after {
        content: ' ';
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: ${({ open }) => open ? '1' : '0'};
        visibility: ${({ open }) => open ? 'visible' : 'hidden'};
        z-index: ${({ open }) => open ? '9999' : '-9999'};
        transition: visibility 0s, opacity 0.1s ease-in-out;
    }
`
export const SocialLinks = styled.div`
    font-size: 14px;

    a {
        padding-right: 14px;
    }
`
export const StyledMerchant = styled(Col)`
    text-align: right;
`
export const StyledMenu = styled(Col)`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding-left: 9px;
    
    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        opacity: ${({ open }) => open ? '1' : '0'};
        visibility: ${({ open }) => open ? 'visible' : 'hidden'};
        z-index: ${({ open }) => open ? '99999' : '-99999'};
        left: ${({ open }) => open ? '0' : '-100vw'};
        transition: visibility 0s, opacity 0.1s, left 0.5s ease-in-out;
        position: fixed;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        width: 60vw;
        height: 100vh;
        background-color: #fafafa;
    }

    .menu-link {
        padding: 0 1rem;
        display: inline-block;

        @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
            padding: 0.8rem 0.7rem;
        }
    }
`
export const StyledLink = styled(AniLink)`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        font-size: 20px;
        font-weight: 800;
        opacity: 0.7;
    }
`
export const StyledButton = styled(FontAwesomeIcon)`
    display: none;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        display: inline-block;
    }

    :hover {
        cursor: pointer;
    }
`
export const StyledClose = styled(FontAwesomeIcon)`
    display: none;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        display: block;
        font-size: 24px;
        margin: 1.4rem 0.7rem 0.5rem;

        :hover {
            cursor: pointer;
        }
    }
`
export const SocialCol = styled(Col)`
    padding-left: 0;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        display: none;
    }
`
export const StyledMerchantCol = styled(Col)`
    text-align: right;
    padding-right: 0;
`
export const StyledMerchantLink = styled(AniLink)`
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
    user-select: none;
`
export const StyledUserIcon = styled(FontAwesomeIcon)`
    margin-right: 15px;
    font-size: 14px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        margin-right: 0;
    }
`