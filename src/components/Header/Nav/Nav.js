import React, { useState } from 'react'

import Wrapper from '../../Wrapper'
import Logo from './Logo'
import Search from './Search'
import Button from './Button'
import Menu from './Menu'
import MerchantLink from './MerchantLink'
import { StyledNav } from './style'

const Nav = ({ logo, search }) => {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
          <StyledNav>
            {logo &&
              <Logo />
            }
            {search && 
              <Search />
            }
            <Button open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <MerchantLink />
          </StyledNav>
        </Wrapper>
    )
}

export default Nav
