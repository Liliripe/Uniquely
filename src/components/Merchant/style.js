import styled from 'styled-components'
import Col from 'react-bootstrap/Col'

export const StyledCol = styled(Col)`
    margin-bottom: 30px;

    div {
        background-color: #eee;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 400px;
        padding: 50px;

        div {
            padding: 0;
            min-height: auto;
        }
    }
`
export const SmallText = styled.p`
    opacity: 0.8;
    font-size: 12px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    margin-bottom: 10px;
`
export const StyledPrice = styled.h3 `
    font-size: 36px;
    font-weight: 100;
    margin: 20px auto;
    padding: 15px 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    min-width: 220px;

    span {
        font-size: 22px;
        padding-left: 8px;
    }
`
