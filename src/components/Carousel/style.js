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
export const StyledContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 140px;

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
        background: linear-gradient(90deg, rgba(237,237,231,0.85) 20%, transparent 100%);
        z-index: 3;

        @media screen and (max-width: ${props => props.theme.responsive.medium}) {
            background: linear-gradient(90deg, rgba(237,237,231,0.85) 50%, transparent 100%);
        }

        @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
            background: linear-gradient(90deg, rgba(237,237,231,0.75) 100%, transparent 100%);
        }
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
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 2.2px;
            opacity: 0.8;
            margin-bottom: 10px;
        }
        h2 {
            margin-bottom: 20px;

            @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
                margin-bottom: 50px;
            }
        }
        div {
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 50px;

            @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
                display: none;
            }
        }
        a {
            color: ${props => props.theme.colors.black};
            transition: all ease-in-out 0.2s;

            :hover {
                opacity: 1;
            }

            span.outer {
                border: 1px solid ${props => props.theme.colors.black};
                transition: all ease-in-out 0.2s;
                padding: 15px 2px 18px 3px;

                :hover {
                    background-color: rgba(255, 255, 255, 0.65);
                    opacity: 1;
                }
            }
            span.inner {
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 2.2px;
                font-weight: 500;
                border: 1px solid rgba(0, 0, 0, 0.4);
                padding: 15px 40px;
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
