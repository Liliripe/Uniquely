import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Package from '../components/Merchant/Package'

export const MerchantPage = ({ banner, products }) => {
  return (
    <Package 
      banner={banner}
      products={products} 
    />
  )
}

const MerchantProduct = ({ data }) => {
  const allProducts = data.allWcProducts.edges
  const merchantBanner = data.wordpressPage.acf.banner_image.localFile.childImageSharp.fluid.src

  return (
    <>
      <Helmet title={`Uniquely | Merchant Sign-Up`} />
      <MerchantPage 
        banner={merchantBanner}
        products={allProducts}
      />
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
    wordpressPage(title: { eq: "Merchant" }) {
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
