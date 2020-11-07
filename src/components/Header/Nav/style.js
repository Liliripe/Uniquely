import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 7px;
`
export const StyledMenu = styled.ul`
    opacity: ${({ open }) => open ? '1' : '0'};
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    transition: visibility 0s, opacity 0.2s linear;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding-left: 9px;
    
    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${({ open }) => open ? '99999' : '-99999'};
        background-color: #fafafa;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .menu-link {
        padding: 0 0.7rem;
        display: inline-block;

        @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
            padding: 0.8rem 0.7rem;
        }
    }
`
export const StyledLink = styled(AniLink)`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    font-weight: 500;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        font-size: 20px;
        font-weight: 800;
        opacity: 0.7;
    }
`
export const StyledButton = styled(FontAwesomeIcon)`
    :hover {
        cursor: pointer;
    }
`
export const StyledSearch = styled(FontAwesomeIcon)`
    margin-right: 20px;
    font-size: 14px;

    :hover {
        cursor: pointer;
    }
`
export const StyledMerchantLink = styled(AniLink)`
    margin-left: auto;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    font-weight: 500;
    -webkit-user-select: none;  
    -moz-user-select: none;    
    -ms-user-select: none;      
    user-select: none;
`
export const StyledUserIcon = styled(FontAwesomeIcon)`
    margin-right: 15px;
    font-size: 14px;
`
export const StyledSVG = styled.svg `
    max-width: 150px;
    width: 150px;
    margin-right: 20px;
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