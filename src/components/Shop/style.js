import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'

export const StyledImg = styled(Img)`
    width: 100%;
    height: 300px;
`
export const StyledCol = styled(Col)`
    margin-bottom: 20px;

    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        margin-bottom: 50px;
    }
`
export const Info = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h5``
export const Price = styled.p`
    opacity: 0.75;
`
