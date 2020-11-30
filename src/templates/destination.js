import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Breadcrumbs from '../components/Destination/Breadcrumbs'
import Wrapper from '../components/Wrapper'
import Carousel from '../components/Carousel'
import Content from '../components/Destination/Content'

export const DestinationTemplate = ({
  content,
  id,
  location,
  categories,
  title,
  date,
  booking_url,
  featured_image,
  gallery_image1,
  gallery_image2,
  gallery_image3,
  gallery_image4,
  gallery_image5,
  posts,
  destinations
}) => {
  return (
    <>
      <Breadcrumbs
        title={title}
        categories={categories}
        image={featured_image.localFile.childImageSharp.fluid.src}
      />

      <Wrapper>
        <Carousel 
          type="destination" 
          limit="5" 
          id={id}
          img1={gallery_image1}
          img2={gallery_image2}
          img3={gallery_image3}
          img4={gallery_image4}
          img5={gallery_image5}
        />

        <Content 
          title={title}
          content={content}
          categories={categories}
          date={date}
          bookingURL={booking_url}
        />
      </Wrapper>

      <strong>Connected Posts:</strong> 
      {posts.map(post => {
        return post.node.acf.location_name === location ?
          <div>
            {post.node.title}<br />
            {post.node.acf.location_name}<br /><br />
          </div>
        :
          <div>no match<br /><br /></div>
        }
      )}
      
      <strong>Other Locations:</strong> 
      {destinations.map(destination => {
        return destination.node.title !== title ?
          <div>
            {destination.node.title}<br /><br />
          </div>
        :
          <div>no match<br /><br /></div>
        }
      )}
    </>
  )
}

DestinationTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const DestinationPost = ({ data }) => {
  const destination = data.wordpressWpDestinations
  const allPosts = data.allWordpressPost.edges
  const allDestinations = data.allWordpressWpDestinations.edges

  return (
    <>
      <Helmet title={`${destination.title} | Explore`} />
      <DestinationTemplate
        title={destination.title}
        id={destination.id}
        location={destination.acf.location_name}
        categories={destination.categories}
        date={destination.date}
        booking_url={destination.acf.booking_url}
        featured_image={destination.featured_media}
        gallery_image1={destination.acf.image_1.url}
        gallery_image2={destination.acf.image_2.url}
        gallery_image3={destination.acf.image_3.url}
        gallery_image4={destination.acf.image_4.url}
        gallery_image5={destination.acf.image_5.url}
        content={destination.content}
        posts={allPosts}
        destinations={allDestinations}
      />
    </>
  )
}

DestinationPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default DestinationPost

export const pageQuery = graphql`
  query DestinationsandPosts($id: String!) {
    wordpressWpDestinations(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      acf {
        booking_url
        location_name
        image_1 {url}
        image_2 {url}
        image_3 {url}
        image_4 {url}
        image_5 {url}
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          slug
          id
          acf {
            location_name
          }
        }
      }
    }
    allWordpressWpDestinations {
      edges {
        node {
          title
        }
      }
    }
  }
`
