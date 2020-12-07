import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Col from 'react-bootstrap/Col'
import BackgroundImage from 'gatsby-background-image'

export const StyledCol = styled(Col)`
    margin-bottom: 30px;

    .slick-arrow {
        path {
            fill: black;
        }
    }
`
export const StyledIcon = styled(FontAwesomeIcon)`
    position: relative;
`
export const StyledImage = styled(BackgroundImage)`
    width: 100%;
    height: 500px;
`
