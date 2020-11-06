import React from 'react'

import Topbar from './Topbar'
import Logo from './Logo'
import Nav from './Nav'
import ScrollHeader from './ScrollHeader'
import { StyledHeader } from './style'

const Header = () => {
  return (
    <>
      <ScrollHeader />

      <StyledHeader>
        <Topbar />
        <Logo />
        <Nav search />
      </StyledHeader>
    </>
  )
}

export default Header
