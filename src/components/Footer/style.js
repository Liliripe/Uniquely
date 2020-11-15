import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${props => props.theme.colors.lgrey};
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`
export const StyledGrid = styled(Row)`
    padding-top: 100px;
    padding-bottom: 100px;

    p {
        font-size: 14px;
        margin-bottom: 3px;
    }
`
export const StyledTitle = styled.h3`
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 17px;
    margin-bottom: 20px;
`
export const StyledUL = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
        margin-bottom: 3px;

        a {
            font-size: 14px;
        }
    }
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;

    input[type="text"] {
        border: 1px solid rgba(0, 0, 0, 0.3);
        margin-right: 8px;
        padding: 5px 10px;
    }
    input[type="submit"] {
        position: relative;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.black};
        padding: 5px 20px;
        font-size: 22px;
    }
`
export const StyledCopyright = styled.div`
    margin-top: auto;
    width: 100%;
    background-color: ${props => props.theme.colors.dgrey};
    padding: 20px 0;
`
export const StyledRow = styled(Row)`
    justify-content: space-between;
`
export const SocialCol = styled(Col)`
    text-align: right;
    font-size: 14px;

    a {
        padding-right: 14px;
    }
`
