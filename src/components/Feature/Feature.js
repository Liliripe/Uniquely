import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'

import Wrapper from '../Wrapper'
import Title from '../Title'
import Grid from './Grid'
import Banner from './Banner'
import { StyledContainer } from './style'

const Feature = ({ grid, title, subtitle, align }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpDestinations {
          edges {
            node {
              title
              id
              slug
              categories {
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 650) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        allWordpressPost {
          edges {
            node {
              title
              id
              slug
              categories {
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 650) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render = { data => (
      <Wrapper>
        <StyledContainer fluid>
          <Title title={title} subtitle={subtitle} align={align} />

          <Row>
              {grid ? (
                <>
                  <Grid {...data} />
                </>
               ) : (
                <Banner />
              )} 
          </Row>
        </StyledContainer>
      </Wrapper>
    )}
  />
)

export default Feature
