import styled from 'styled-components'

export const StyledTopbar = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    position: relative;
    z-index: 9999;

    a {
        color: ${props => props.theme.colors.white};
    }
    a:hover {
        opacity: 0.7;
    }
`
export const StyledInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`
export const StyledNewsletter = styled.div`
    font-size: 14px;

    span {
        padding-left: 7px;
    }
`
export const StyledSearch = styled.div`
    font-size: 14px;

    :hover {
        cursor: pointer;
    }

    span {
        padding-left: 7px;
    }
`
