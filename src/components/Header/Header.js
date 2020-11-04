import React from 'react'

import Topbar from './Topbar'
import Nav from './Nav'
import { StyledHeader } from './style'

const Header = () => {
  return (
    <StyledHeader>
      <Topbar />
      <Nav />
    </StyledHeader>
  )
}

export default Header
