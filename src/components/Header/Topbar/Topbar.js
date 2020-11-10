import React from 'react'

import Wrapper from '../../Wrapper'
import Newsletter from './Newsletter'
import Search from './Search'
import { StyledTopbar, StyledInner } from './style'

const Topbar = () => {
  return (
    <StyledTopbar>
      <Wrapper>
        <StyledInner>
          <Newsletter />
          <Search />
        </StyledInner>
      </Wrapper>
    </StyledTopbar>
  )
}

export default Topbar
