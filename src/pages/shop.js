import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Listing from '../components/Shop'

export const ShopPage = ({ banner, products }) => {
  return (
    <Listing 
        banner={banner}
        products={products} 
    />
  )
}

const ShopProduct = ({ data }) => {
  const allShopProducts = data.allWcProducts.edges
  const shopBanner = data.wordpressPage.acf.banner_image.localFile.childImageSharp.fluid.src

  return (
    <>
      <Helmet title={`Uniquely | Shop`} />
      <ShopPage 
        banner={shopBanner}
        products={allShopProducts} 
    />
    </>
  )
}

ShopProduct.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ShopProduct

export const shopQuery = graphql`
  query {
    wordpressPage(title: { eq: "Shop" }) {
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
    allWcProducts {
      edges {
        node {
          name
          slug
          price
          categories {
            name
          }
          images {
            alt
            localFile {
              childImageSharp {
                fixed(width: 500, height: 500) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
