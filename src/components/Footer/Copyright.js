import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import Wrapper from '../Wrapper'
import { StyledCopyright, StyledRow, SocialCol } from './style'

const Copyright = () => {
  return (
    <StyledCopyright>
      <Wrapper>
        <Container fluid>
          <StyledRow>
            <Col>
              <span>Uniquely &copy; 2020</span>
            </Col>
            <SocialCol>
                <a href="#" target="blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" target="blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" target="blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </SocialCol>
          </StyledRow>
        </Container>
      </Wrapper>
    </StyledCopyright>
  )
}

export default Copyright
