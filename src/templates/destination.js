import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

export const DestinationPostTemplate = ({ title }) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

DestinationPostTemplate.propTypes = {
  title: PropTypes.string,
}

const DestinationPost = ({ data }) => {
  const { wordpressWpDestinations: post } = data

  return (
    <>
      <Helmet title={`${post.title} | Destinations`} />
      <DestinationPostTemplate
        title={post.title}
      />
    </>
  )
}

DestinationPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default DestinationPost

export const pageQuery = graphql`
  fragment DestinationFields on wordpress__POST {
    id
    title
  }
  query DestinationPostByID($id: String!) {
    wordpressWpDestinations(id: { eq: $id }) {
      id
      title
    }
  }
`
