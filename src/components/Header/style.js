import styled from 'styled-components'

export const StyledHeader = styled.div`
    width: 100%;
    margin-bottom: 7px;
`
export const StyledTopbar = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};

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

    div:last-of-type {
        margin-left: auto;
    }
`
export const Newsletter = styled.div`
    font-size: 14px;

    span {
        padding-left: 7px;
    }
`
export const SocialLinks = styled.div`
    font-size: 14px;

    a {
        padding-left: 14px;
    }
`
export const StyledSVG = styled.svg `
    max-width: 180px;
    padding: 30px 0 20px;
`