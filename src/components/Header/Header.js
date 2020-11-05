import React from 'react'

import Topbar from './Topbar'
import Logo from './Logo'
import Nav from './Nav'
import ScrollHeader from './ScrollHeader'
import { StyledHeader } from './style'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Topbar />
        <Logo />
        <Nav />
      </StyledHeader>

      <ScrollHeader />
    </>
  )
}

export default Header
