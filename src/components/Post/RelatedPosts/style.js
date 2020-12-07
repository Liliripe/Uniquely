import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'

export const StyledTitle = styled.h4`
    margin-bottom: 25px;
`
export const StyledSlider = styled(Slider)`
    .slick-arrow {
        font-size: 20px;
        padding: 0 20px;
    }
    .slick-next {
        padding: 0 50px 0 20px;
    }
`
export const StyledBlock = styled.div`
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        margin-right: 20px;
    }
`
export const StyledImage = styled(BackgroundImage)`
    height: 380px !important;
    position: relative;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledSubtitle = styled.h2`
    position: relative;
    z-index: 4;
    color: white;
`
