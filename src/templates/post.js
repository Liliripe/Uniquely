import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'

import Breadcrumbs from '../components/Post/Breadcrumbs'
import Wrapper from '../components/Wrapper'
import Images from '../components/Post/Images'
import Content from '../components/Post/Content'

export const BlogPostTemplate = ({
  id,
  title,
  categories,
  banner_image,
  featured_image,
  gallery_image2,
  gallery_image3,
  content,
  date,
  booking_url
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
          <Images 
            featuredimg={featured_image}
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
        </Row>
      </Wrapper>
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <>
      <Helmet title={`${post.title} | Explore`} />
      <BlogPostTemplate
        id={post.id}
        title={post.title}
        content={post.content}
        categories={post.categories}
        banner_image={post.acf.banner_image.source_url}
        featured_image={post.featured_media.localFile.childImageSharp.fluid}
        gallery_image2={post.acf.image_2.localFile.childImageSharp.fluid}
        gallery_image3={post.acf.image_3.localFile.childImageSharp.fluid}
        date={post.date}
        booking_url={post.acf.booking_url}
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
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      acf {
        booking_url
        location_name
        image_2 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image_3 {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        banner_image {source_url}
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
  }
`