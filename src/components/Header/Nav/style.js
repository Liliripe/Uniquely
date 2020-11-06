import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const StyledMenu = styled.ul`
    opacity: ${({ open }) => open ? '1' : '0'};
    transition: opacity ease-in-out 0.2s;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none; 
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding-left: 9px;
`
export const StyledLink = styled(Link)`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    font-weight: 500;
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
export const StyledMerchantLink = styled(Link)`
    margin-left: auto;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    font-weight: 500;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        span {
            display: none;
        }
    }
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