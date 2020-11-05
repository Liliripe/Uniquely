import styled from 'styled-components'

export const StyledWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 0 auto;
    padding: 0 5%;
    text-align: ${({align}) => 
        align === 'right' && 'right' ||
        align === 'center' && 'center' || 
        'left'
    }
`
