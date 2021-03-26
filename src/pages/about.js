import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import AboutBlock from '../components/Page/About'

export const AboutPage = ({ details }) => {
  return (
    <AboutBlock details={details} />
  )
}

const AboutContent = ({ data }) => {
  const alldetails = data.allWordpressPage.edges

  return (
    <>
      <Helmet title={`Uniquely | About Us`} />
      <AboutPage details={alldetails} />
    </>
  )
}

AboutContent.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutContent

export const aboutQuery = graphql`
query {
  allWordpressPage(filter: {slug: {eq: "about"}}) {
    edges {
      node {
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 980) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        acf {
          banner_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
}
`
