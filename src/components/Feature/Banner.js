import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Col from 'react-bootstrap/Col'

import { 
  StyledBanner, 
  StyledSubtitle, 
  StyledTitle, 
  StyledExcerpt, 
  StyledButton 
} from './style'

const Banner = ({ subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpDestinations(filter: {
        categories: {
          elemMatch: {
            slug: {
              eq: "popular"
            }
          }
        }
      }) {
        edges {
          node {
            title
            excerpt
            slug
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
  `)

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
      controls.start("visible");
      }
  }, [controls, inView]);

  return (
    <>
      {data.allWordpressWpDestinations.edges.slice(0, 1).map(popular => (
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
          }}
          transition={{ duration: 1.3 }}
        >
          <Col>
            <StyledBanner
              Tag="section"
              fluid={popular.node.featured_media.localFile.childImageSharp.fluid}
            >
              <StyledSubtitle>
                {subtitle}
              </StyledSubtitle>
              <StyledTitle>
                {popular.node.title}
              </StyledTitle>
              <StyledExcerpt 
                dangerouslySetInnerHTML={{ __html: popular.node.excerpt }} 
              />
              <StyledButton to={popular.node.slug} fade>
                View Destination
              </StyledButton>
            </StyledBanner>
          </Col>
        </motion.div>
      ))}
    </>
  )
}

export default Banner
