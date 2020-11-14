import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Wrapper from '../Wrapper'
import Title from '../Title'
import Block from './Block'

const Post = ({ type, number, title, subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            title
            slug
            categories {
                name
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
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
    <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
        }}
        transition={{ duration: 1.3 }}
        style={{ width: '100%' }}
    >
        <Wrapper>
            <Title
                title={title}
                subtitle={subtitle}
                align="center"
                padding="50px 0"
            />

            <Container fluid>
                <Row>
                    <Block {...data} />
                </Row>
            </Container>
        </Wrapper>
    </motion.div>
  )
}

export default Post
