import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledSlide = styled.div`
    width: 100%;
    height: 75vh;
    max-height: 680px;

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

    ::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        background: linear-gradient(90deg, rgba(237,237,231,0.8) 20%, transparent 100%);
        z-index: 3;
    }

    * {
        position: relative;
        z-index: 4;
    }
`
export const StyledIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.colors.black};
    font-size: 22px;
    position: relative;
    opacity: 0.5;
`
