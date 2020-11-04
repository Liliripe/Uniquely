import React from 'react'
import { bool, func } from 'prop-types'

const Button = ({ open, setOpen }) => {
    return (
        <div open={open} onClick={() => setOpen(!open)}>
            button
        </div>
    )
}

Button.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Button
