import React from 'react'
import { bool, func } from 'prop-types'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { StyledButton } from './style'

const Button = ({ open, setOpen }) => {
    return (
      <StyledButton icon={faBars} open={open} onClick={() => setOpen(!open)} />
    )
}

Button.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Button
