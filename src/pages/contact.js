import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import ContactBlock from '../components/Page/Contact'

export const ContactPage = ({ info }) => {
  return (
    <ContactBlock info={info} />
  )
}

const ContactContent = ({ data }) => {
  const allinfo = data.allWordpressPage.edges

  return (
    <>
      <Helmet title={`Uniquely | Contact Us`} />
      <ContactPage info={allinfo} />
    </>
  )
}

ContactContent.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ContactContent

export const contactQuery = graphql`
  query {
    allWordpressPage(filter: {slug: {eq: "contact"}}) {
        edges {
            node {
                title
                content
                featured_media {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1500) {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
  }
`
