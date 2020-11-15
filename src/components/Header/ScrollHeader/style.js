import styled from 'styled-components'
import Col from 'react-bootstrap/Col'

export const StyledScrollHeader = styled.div`
    position: fixed;
    top: -100px;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: #fff;
    padding: 15px 0;

    @media screen and (max-width: ${props => props.theme.responsive.tablet}) {
        .merchant-link {
            margin-left: 14px;
            padding-top: 2px;

            span {
                display: none;
            }
        }
    }
`
export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const LogoCol = styled(Col)`
    margin-left: 30px;
`
export const MenuCol = styled(Col)`
    position: absolute;
    left: 20px;
    margin-top: 2px;
`
