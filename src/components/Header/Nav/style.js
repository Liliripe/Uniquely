import styled from 'styled-components'

export const StyledMenu = styled.div`
    transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
`