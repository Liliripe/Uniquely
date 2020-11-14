import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BackgroundImage from 'gatsby-background-image'

export const StyledImage = styled(BackgroundImage)`
    min-height: 450px;
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
`
export const StyledCategory = styled.p`
    margin: 18px 0 5px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 11px;
    font-weight: 500;
    opacity: 0.95;
`
