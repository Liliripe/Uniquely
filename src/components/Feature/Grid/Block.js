import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Button from '../../Button'
import { 
  StyledRow,
  StyledCol, 
  StyledBackground, 
  StyledText, 
  StyledTitle, 
  StyledSmallTitle,
  StyledSubtitle, 
  StyledExcerpt,
  StyledLink,
  Overlay
} from './style'

const FeatureGrid = ({ xs, hover, title, slug, excerpt, categories, image }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
      controls.start("visible");
      }
  }, [controls, inView]);

  return (
    <>
      {hover ?  
        <StyledCol xs={xs} key={slug} hover>
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
            <StyledBackground
              Tag="div"
              fluid={image}
              hover
            >
              <StyledLink 
                fade 
                to={slug}
                alt={title}
              >
                <Overlay>
                  {categories.slice(0, 1).map(category => (
                    <StyledSubtitle>{category.name}</StyledSubtitle>
                  ))}
                  <StyledTitle>{title}</StyledTitle>
                  <StyledExcerpt 
                    dangerouslySetInnerHTML={{ __html: excerpt }} 
                  />
                  <Button slug={slug} title="View Details" />
                </Overlay>
              </StyledLink>
            </StyledBackground>
          </motion.div>
        </StyledCol>
      :
        <StyledRow>
          <StyledCol xs={xs}>
            <StyledText>
              {categories.slice(0, 1).map(category => (
                <StyledSubtitle>{category.name}</StyledSubtitle>
              ))}
              <StyledLink 
                fade 
                to={slug}
                alt={title}
              >
                <StyledSmallTitle>{title}</StyledSmallTitle>
              </StyledLink>
            </StyledText>
          </StyledCol>

          <StyledCol xs={xs} key={slug}>
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
              <StyledLink 
                fade 
                to={slug}
                alt={title}
              >
                <StyledBackground
                  Tag="div"
                  fluid={image}
                  className="block-background"
                />
              </StyledLink>
            </motion.div>
          </StyledCol>
        </StyledRow>
      }
    </>
  )
}

export default FeatureGrid
