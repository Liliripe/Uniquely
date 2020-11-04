import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

export const ProductTemplate = () => {
  return (
    <section className="section">
      test product template
    </section>
  )
}

const Product = ({ data }) => {
  return (
    <>
      product template
    </>
  )
}

export default Product
