import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import MainFeature from '../components/Feature'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
      <Helmet title="Uniquely.io" />
        <Header />
        <Carousel type="hero" limit="5" />
        <MainFeature 
          grid 
          title="Popular <em>Featured</em> Content" 
          subtitle="Destinations & Events" 
          align="center"
        />
      </>
    )
  }
}
