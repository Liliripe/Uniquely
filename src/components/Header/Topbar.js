import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Wrapper from '../Common/Wrapper'
import { StyledTopbar, StyledInner, Newsletter, SocialLinks } from './style'

const Topbar = () => {
  return (
    <StyledTopbar>
      <Wrapper>
        <StyledInner>
          <Newsletter>
            <a href="#" target="blank">
              <FontAwesomeIcon icon={faEnvelope} /> 
              <span>Newsletter</span>
            </a>
          </Newsletter>
    
          <SocialLinks>
            <a href="#" target="blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" target="blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" target="blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </SocialLinks>
        </StyledInner>
      </Wrapper>
    </StyledTopbar>
  )
}

export default Topbar
