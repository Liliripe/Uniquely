import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import Wrapper from '../Wrapper'
import Logo from '../Header/Logo'
import { StyledGrid, StyledTitle, StyledUL, StyledForm } from './style'

const FooterGrid = () => {
  return (
    <Wrapper>
      <Container fluid>
        <StyledGrid>
          <Col>
            <Logo width="170px" padding="0 0 20px" />
            <p><AniLink to="mailto:info@uniquely.io">info@uniquely.io</AniLink></p>
            <p><AniLink to="tel:5555555555">(555) 555-5555</AniLink></p>
          </Col>

          <Col>
            <StyledTitle>Navigation</StyledTitle>
            <StyledUL>
              <li>
                <AniLink fade to="">Browse Destinations</AniLink>
              </li>
              <li>
                <AniLink fade to="">Shop Products</AniLink>
              </li>
            </StyledUL>
          </Col>

          <Col>
            <StyledTitle>About Us</StyledTitle>
            <StyledUL>
              <li>
                <AniLink fade to="">Our Company</AniLink>
              </li>
              <li>
                <AniLink fade to="">Contact Us</AniLink>
              </li>
            </StyledUL>
          </Col>

          <Col>
            <StyledTitle>Join Our Newsletter</StyledTitle>
            <StyledForm>
              <input type="text" placeholder="E-mail address" />
              <input type="submit" value="&rsaquo;" />
            </StyledForm>
          </Col>
        </StyledGrid>
      </Container>
    </Wrapper>
  )
}

export default FooterGrid
