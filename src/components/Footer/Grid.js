import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Container from 'react-bootstrap/Container'

import Wrapper from '../Wrapper'
import Logo from '../Header/Logo'
import { StyledGrid, StyledCol, StyledTitle, StyledUL, StyledForm } from './style'

const FooterGrid = ({ ...data }) => {
  return (
    <Wrapper>
      <Container fluid>
        <StyledGrid>
          <StyledCol xs={12} md={3}>
            <Logo width="170px" padding="0 0 20px" />
            <p><AniLink to="mailto:info@uniquely.io">info@uniquely.io</AniLink></p>
          </StyledCol>

          <StyledCol>
            <StyledTitle>Navigation</StyledTitle>
            <StyledUL>
              {data &&
                  data.navQuery &&
                  data.navQuery.edges &&
                  data.navQuery.edges[0] &&
                  data.navQuery.edges[0].node &&
                  data.navQuery.edges[0].node.items &&
                  data.navQuery.edges[0].node.items.map(
                  prop => {
                      return (
                          <li>
                              <AniLink
                                  fade
                                  to={prop.url}
                                  alt={prop.title}
                              >
                                  {prop.title}
                              </AniLink>
                          </li>
                      )
                  }
              )}
            </StyledUL>
          </StyledCol>

          <StyledCol>
            <StyledTitle>About Us</StyledTitle>
            <StyledUL>
              {data &&
                  data.aboutQuery &&
                  data.aboutQuery.edges &&
                  data.aboutQuery.edges[0] &&
                  data.aboutQuery.edges[0].node &&
                  data.aboutQuery.edges[0].node.items &&
                  data.aboutQuery.edges[0].node.items.map(
                  prop => {
                      return (
                          <li>
                              <AniLink
                                  fade
                                  to={prop.url}
                                  alt={prop.title}
                              >
                                  {prop.title}
                              </AniLink>
                          </li>
                      )
                  }
              )}
            </StyledUL>
          </StyledCol>

          <StyledCol>
            <StyledTitle>Join Our Newsletter</StyledTitle>
            <StyledForm>
              <input type="text" placeholder="E-mail address" />
              <input type="submit" value="&rsaquo;" />
            </StyledForm>
          </StyledCol>
        </StyledGrid>
      </Container>
    </Wrapper>
  )
}

export default FooterGrid
