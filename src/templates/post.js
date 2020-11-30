import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Breadcrumbs from '../components/Destination/Breadcrumbs'
import Wrapper from '../components/Wrapper'
import Carousel from '../components/Carousel'
import Content from '../components/Destination/Content'
import LocalPosts from '../components/Destination/Posts'
import Related from '../components/Destination/Related'

export const BlogPostTemplate = ({
  content,
  id,
  location,
  categories,
  title,
  date,
  booking_url,
  featured_image,
  gallery_image2,
  gallery_image3,
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
          img2={gallery_image2}
          img3={gallery_image3}
        />

        <Content 
          title={title}
          content={content}
          categories={categories}
          date={date}
          bookingURL={booking_url}
        />
      </Wrapper>

      <LocalPosts 
        heading="Local events and sales"
        location={location}
        posts={posts}
      />

      <Related
        heading="Related destinations"
        title={title}
        destinations={destinations}
      />
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const destination = data.wordpressWpDestinations
  const allPosts = data.allWordpressPost.edges
  const allDestinations = data.allWordpressWpDestinations.edges

  return (
    <>
      <Helmet title={`${destination.title} | Explore`} />
      <BlogPostTemplate
        title={destination.title}
        id={destination.id}
        location={destination.acf.location_name}
        categories={destination.categories}
        date={destination.date}
        booking_url={destination.acf.booking_url}
        featured_image={destination.featured_media}
        gallery_image2={destination.acf.image_2.source_url}
        gallery_image3={destination.acf.image_3.source_url}
        content={destination.content}
        posts={allPosts}
        destinations={allDestinations}
      />
    </>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query DestinationsandPosts {
    wordpressWpDestinations(title: { eq: "Bermuda" }) {
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
        image_2 {source_url}
        image_3 {source_url}
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
          featured_media {
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
    }
    allWordpressWpDestinations {
      edges {
        node {
          title
          slug
          id
          acf {
            location_name
          }
          featured_media {
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
    }
  }
`
