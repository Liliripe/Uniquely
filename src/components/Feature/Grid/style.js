import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BackgroundImage from 'gatsby-background-image'

export const RowWrap = styled(Row)`
    .row:first-of-type {
        flex-direction: row-reverse;
    }
    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        margin-left: ${({hover}) => 
            hover && '' || '0 !important'
        };
    }
`
export const StyledRow = styled(Row)`
    width: 100%;

    :hover {
        .block-background::after {
            background-size: 110% !important;
            transition: background-size 2s !important;
        }
    }
`
export const StyledCol = styled(Col)`
    position: relative;
    margin-bottom: 30px;
`
export const StyledBackground = styled(BackgroundImage)`
    background-size: 110%;

    @media screen and (max-width: ${props => props.theme.responsive.large}) {
        background-size: 100%;
        height: ${({hover}) => 
            hover && '400px' || '185px'
        };
    }
    @media screen and (min-width: ${props => props.theme.responsive.large}) and (max-width: ${props => props.theme.responsive.xlarge}) {
        height: ${({hover}) => 
            hover && '500px' || '235px'
        };
    }
    @media screen and (min-width: ${props => props.theme.responsive.xlarge}) and (max-width: ${props => props.theme.responsive.xxlarge}) {
        height: ${({hover}) => 
            hover && '560px' || '265px'
        };
    }
    @media screen and (min-width: ${props => props.theme.responsive.xxlarge}) {
        height: ${({hover}) => 
            hover && '700px' || '335px'
        };
    }
`
export const StyledImage = styled.image``
export const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${props => props.theme.colors.mgrey};
`
export const StyledTitle = styled.h2`
    margin-bottom: 20px;
`
export const StyledSmallTitle = styled.h5`
    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        font-size: 16px;
    }
`
export const StyledSubtitle = styled.p`
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 1px;
`
export const StyledExcerpt = styled.p`
    margin-bottom: 50px;
    padding: 0 40px;
    font-weight: 500;
    text-align: center;
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
    flex-direction: column;
    align-items: center;
    padding: 30px;
    opacity: 0;
    transition: opacity 0.3s;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        opacity: 1;
    }

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
