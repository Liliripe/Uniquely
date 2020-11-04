import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div style={{height: '2000px'}}>&nbsp;</div>
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  })
}

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
    allWordpressWpDestinations(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
        }
      }
    }
    allWcProducts {
      edges {
        node {
          id
          wordpress_id
          name
          slug
          categories {
            wordpress_id
          }
        }
      }
    }
  }
`
