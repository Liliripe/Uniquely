import React from 'react'
import Helmet from 'react-helmet'

import Carousel from '../components/Carousel'
import Intro from '../components/Intro'
import Title from '../components/Title'
import Feature from '../components/Feature'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
      <Helmet title="Uniquely.io" />
        <Carousel type="hero" limit="5" />
        <Intro
          align="center"
          padding="100px 0"
          background="#f7f7f7"
        />
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
