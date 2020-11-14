import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Title from '../components/Title'
import Feature from '../components/Feature'
import Post from '../components/Post'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
      <Helmet title="Uniquely.io" />
        <Header />
        <Carousel type="hero" limit="5" />
        <Title
          title="Popular <em>Featured</em> Content" 
          subtitle="Destinations & Events" 
          align="center"
          padding="60px 0 10px"
        />
        <Feature grid />
        <Feature subtitle="Featured Destination" />
        <Post 
          type="list" 
          number="3" 
          title="Popular Destinations"
          subtitle="Browse the Best-Reviewed"
        />
      </>
    )
  }
}
