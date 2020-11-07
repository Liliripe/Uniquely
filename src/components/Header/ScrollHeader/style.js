import styled from 'styled-components'

export const StyledScrollHeader = styled.div`
    position: fixed;
    top: -100px;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: #fff;
    padding: 17px 0 10px;

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
