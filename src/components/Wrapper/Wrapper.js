import React from 'react'

import { StyledWrapper } from './style'

const Wrapper = ({ children, align }) => {
  return (
    <StyledWrapper align={align}>
      {children}
    </StyledWrapper>
  )
}

export default Wrapper
