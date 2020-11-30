import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

export const ProductPostTemplate = ({ title }) => {
  return (
    <div className="section">
      {title}
    </div>
  )
}

ProductPostTemplate.propTypes = {
  title: PropTypes.string,
}

const ProductPost = ({ data }) => {
  const { wordpressWcProducts: product } = data

  return (
    <>
      <Helmet title={`${product.name} | Shop`} />
      <ProductPostTemplate
        title={product.name}
      />
    </>
  )
}

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    name
  }
  query ProductPostByID {
    wordpressWcProducts(name: { eq: "Guided Sight-Seeing Adventure" }) {
      id
      name
    }
  }
`