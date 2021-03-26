import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'

import Breadcrumbs from '../components/Post/Breadcrumbs'
import Wrapper from '../components/Wrapper'
import ImageSlider from '../components/Post/Slider'
import Content from '../components/Post/Content'
import LocalPosts from '../components/Post/LocalPosts'
import RelatedPosts from '../components/Post/RelatedPosts'

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