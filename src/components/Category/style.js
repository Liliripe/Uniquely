import styled from 'styled-components'

export const StyledImage = styled.div`
    width: 100%;
    height: 170px;
    margin: 0 0 60px;
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
        background: rgba(255, 255, 255, 0.65);
        z-index: 3;
    }
`
export const OuterWrapper = styled.div`
    position: relative;
    z-index: 4;
    width: 100%;
    height: 100%;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: space-between;
    }

    ul {
        text-transform: uppercase;
        font-size: 10px;
        letter-spacing: 2px;
        font-weight: 600;

        li {
            display: inline-block;
            padding-left: 10px;
        }
    }
`
