import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledSlide = styled.div`
    width: 100%;
    height: 75vh;
    max-height: 600px;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        max-height: 400px;
    }

    section {
        height: 100%;
        position: relative;
    }
`
export const StaticImage = styled.section`
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.background});
`
export const StyledContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 170px;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        padding: 0;
    }

    ::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 100%, transparent 100%);
        z-index: 3;
    }

    * {
        position: relative;
        z-index: 4;
    }

    div {
        max-width: 470px;

        @media screen and (max-width: ${props => props.theme.responsive.medium}) {
            max-width: 450px;
            width: 90%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        h5 {
            font-size: 17px;
            font-weight: 600;
            letter-spacing: 0.2px;
            margin-bottom: 10px;
            color: ${props => props.theme.colors.white};
        }
        h2 {
            font-size: 66px;
            margin-bottom: 20px;
            font-weight: 700;
            color: ${props => props.theme.colors.white};

            @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
                margin-bottom: 50px;
                font-size: 50px;
            }
        }
        div {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 50px;
            color: ${props => props.theme.colors.white};

            @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
                display: none;
            }
        }
    }
`
export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.colors.black};
    font-size: 22px;
    position: relative;
    opacity: 0.5;
`
