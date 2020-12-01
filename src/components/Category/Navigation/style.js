import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const StyledUl = styled.ul`
    width: 100%;
    text-align: center;
    margin: 30px 0 50px;
`
export const StyledLi = styled.li`
    display: inline-block;
    padding: 0 20px;
`
export const StyledLink = styled(AniLink)`
    text-transform: uppercase;
    font-size: 10.5px;
    letter-spacing: 2px;
    opacity: 0.9;
    text-decoration: ${props => props.active == 'active' ? 'underline' : 'none'}
`
