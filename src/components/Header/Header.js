import React, { useState } from 'react'

import Topbar from './Topbar'
import Wrapper from '../Wrapper'
import Logo from './Logo'
import Nav from './Nav'
import ScrollHeader from './ScrollHeader'
import { StyledHeader } from './style'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollHeader open={open} setOpen={setOpen} />

      <StyledHeader>
        <Topbar />
        <Wrapper align="center">
          <Logo align="center" width="180px" padding="30px 0 20px" />
        </Wrapper>
        <Nav open={open} setOpen={setOpen} />
      </StyledHeader>
    </>
  )
}

export default Header
