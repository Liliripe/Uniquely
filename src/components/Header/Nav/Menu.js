import React from 'react'
import { bool } from 'prop-types'

import { StyledMenu } from './style'

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            menu testing here
        </StyledMenu>
    )
}

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu
