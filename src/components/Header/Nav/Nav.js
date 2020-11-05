import React, { useState } from 'react'

import Wrapper from '../../Wrapper'
import Search from './Search'
import Button from './Button'
import Menu from './Menu'
import MerchantLink from './MerchantLink'
import { StyledNav } from './style'

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
          <StyledNav>
            <Search />
            <Button open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <MerchantLink />
          </StyledNav>
        </Wrapper>
    )
}

export default Nav
