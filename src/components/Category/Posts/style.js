import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import BackgroundImage from 'gatsby-background-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Styledcol = styled(Col)`
    margin-bottom: 30px;
`
export const StyledImage = styled(BackgroundImage)`
    height: 600px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        height: 180px;
    }
    @media screen and (min-width: ${props => props.theme.responsive.tablet}) and (max-width: ${props => props.theme.responsive.large}) {
        height: 400px;
    }
`
export const StyledLink = styled(AniLink)`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;

    ::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        transition: background-color ease-in-out 0.2s;
        z-index: 2;
    }

    :hover {
        color: white;
        opacity: 1;

        ::before {
            background-color: rgba(0, 0, 0, 0.6);
        }
    }

    h2 {
        font-size: 58px;
        position: relative;
        z-index: 3;
        text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
    }
`
