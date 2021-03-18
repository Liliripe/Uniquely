import React from 'react'
import Helmet from 'react-helmet'

import Carousel from '../components/Carousel'
import Title from '../components/Title'
import Feature from '../components/Feature'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
      <Helmet title="Uniquely.io" />
        <Carousel type="hero" limit="5" />
        <Title
          title="Popular <em>Featured</em> Content" 
          subtitle="Destinations & Events" 
          align="center"
          padding="60px 0 10px"
        />
        <Feature grid />
        <Feature subtitle="Featured Destination" />
      </>
    )
  }
}
