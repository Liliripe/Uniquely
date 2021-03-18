import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const StyledImage = styled.div`
    width: 100%;
    height: 320px;
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
        background: rgba(0, 0, 0, 0.45);
        z-index: 3;
    }
`
export const OuterWrapper = styled.div`
    position: relative;
    z-index: 4;
    width: 100%;
    height: 100%;
    text-align: center;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }

    h2 {
        color: white;
        font-size: 3rem;
    }
`
export const StyledRow = styled(Row)`
    padding: 50px 0;
    align-items: center;
`
export const StyledCol = styled(Col)`
    margin-bottom: 20px;
`
export const Subtitle = styled.p`
    opacity: 0.8;
    font-size: 11px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    font-weight: 600;
`
export const Title = styled.h2`
    margin-bottom: 20px;
`
export const Content = styled.div`
    max-width: 520px;
    margin-bottom: 20px;
`
export const StyledButton = styled(AniLink)`
    width: 100%;
    max-width: 200px;
    display: block;
    background-color: white;
    color: black;
    padding: 15px 20px;
    text-align: center;
    font-size: 11px;
    text-transform: uppercase; 
    border: 1px solid black;
    letter-spacing: 1.8px;
    font-weight: 700;

    :hover {
        background-color: black;
        color: white;
    }
`
export const StyledIcon = styled(FontAwesomeIcon)`
    opacity: 0.8;
    margin-right: 14px;
`
export const StyledForm = styled.form`
    width: 100%;

    input,
    textarea {
        border: 1px solid #ddd;
        background-color: #fafafa;
        padding: 5px 12px;
        margin-bottom: 10px;
    }
    input {
        width: 49%;
    }
    textarea {
        display: block;
        width: 100%;
        min-height: 90px;
    }
    button {
        background-color: black;
        color: white;
        padding: 15px 20px;
        min-width: 150px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }

    section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
    }
`
