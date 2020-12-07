import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import Slider from 'react-slick'

export const StyledTitle = styled.h4`
    margin-top: 20px;
    margin-bottom: 25px;

    @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        margin-top: 50px;
    }
`
export const StyledSlider = styled(Slider)`
    margin-bottom: 30px;

    .slick-arrow {
        font-size: 20px;
        padding: 0 20px;
        top: 42%;
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
    height: 320px !important;
`
export const StyledSubtitle = styled.h5`
    margin: 15px 0 20px;
    font-size: 18px;
`
