import React, { useState } from 'react'

import Button from './Button'
import Menu from './Menu'
import {  } from './style'

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
          <Button open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </>
    )
}

export default Nav
