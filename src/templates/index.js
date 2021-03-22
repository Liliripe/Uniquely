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
          title="Uniquely Intro Text Here"
          align="center"
          padding="100px 0"
          background="#f7f7f7"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at lectus justo. Phasellus maximus mauris et rutrum egestas. Sed venenatis mi accumsan nunc sollicitudin, nec ultrices metus elementum. Nam feugiat mauris id ante mattis, et euismod justo porttitor. Vivamus ligula est, congue eget mauris ut, commodo consectetur elit.
        </Intro>
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
