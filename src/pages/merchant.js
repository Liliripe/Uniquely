import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Package from '../components/Merchant/Package'

export const MerchantPage = ({ products }) => {
  return (
    <Package products={products} />
  )
}

const MerchantProduct = ({ data }) => {
  const allProducts = data.allWcProducts.edges

  return (
    <>
      <Helmet title={`Uniquely | Merchant Sign-Up`} />
      <MerchantPage products={allProducts} />
    </>
  )
}

MerchantProduct.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default MerchantProduct

export const merchantQuery = graphql`
  query {
    allWcProducts(filter: {
      categories: {
        elemMatch: {
          name: {
            eq: "Merchant"
          }
        }
      }
    }) {
      edges {
        node {
          name
          slug
          id
          price
          description
        }
      }
    }
  }
`
