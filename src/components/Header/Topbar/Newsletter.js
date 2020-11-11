import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { StyledNewsletter } from './style'

const Newsletter = () => {
    return (
        <StyledNewsletter>
            <a href="#" target="blank">
              <FontAwesomeIcon icon={faEnvelope} /> 
              <span>Newsletter</span>
            </a>
        </StyledNewsletter>
    )
}

export default Newsletter
