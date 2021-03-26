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

export const BlogPostTemplate = ({
  id,
  title,
  categories,
  banner_image,
  featured_image,
  gallery_image2,
  gallery_image3,
  content,
  booking_url,
  location,
  posts,
  destinations
}) => {
  return (
    <>
      <Breadcrumbs
        title={title}
        categories={categories}
        banner={banner_image}
      />

      <Wrapper>
        <Row>
          <ImageSlider 
            key={id}
            name={title}
            featuredimg={featured_image}
            img2={gallery_image2}
            img3={gallery_image3}
          />
  
          <Content
            title={title}
            content={content}
            bookingURL={booking_url}
          />
        </Row>
      </Wrapper>

      <LocalPosts 
        heading="More Unique Experiences"
        current={title}
        location={location}
        allPosts={posts}
      />

      <RelatedPosts
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
  const { wordpressPost: post } = data
  const allPosts = data.allWordpressPost.edges
  const allDestinations = data.allWordpressWpDestinations.edges

  return (
    <>
      <Helmet title={`${post.title} | Explore`} />
      <BlogPostTemplate
        id={post.id}
        title={post.title}
        content={post.content}
        categories={post.categories}
        banner_image={post.acf.post_banner_image.localFile.childImageSharp.fluid}
        featured_image={post.featured_media.localFile.childImageSharp.fluid}
        gallery_image1={post.acf.post_image_1.localFile.childImageSharp.fluid}
        gallery_image2={post.acf.post_image_2.localFile.childImageSharp.fluid}
        gallery_image3={post.acf.post_image_3.localFile.childImageSharp.fluid}
        booking_url={post.acf.booking_url}
        location={post.acf.location_name}
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
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      categories {
        name
        slug
      }
      acf {
        booking_url
        location_name
        post_image_1 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        post_image_2 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        post_image_3 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        post_banner_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
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