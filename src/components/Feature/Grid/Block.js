import React, { useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { 
  StyledCol, 
  StyledBackground, 
  StyledText, 
  StyledTitle, 
  StyledSubtitle, 
  StyledLink,
  Overlay, 
  StyledButton 
} from './style'

const FeatureGrid = ({ title, slug, categories, image }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
      if (inView) {
      controls.start("visible");
      }
  }, [controls, inView]);

  return (
    <StyledCol lg="3" key={slug}>
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
        >
          <StyledLink 
            fade 
            to={slug}
            alt={title}
          >
            <Overlay>
              <StyledButton>View Details</StyledButton>
            </Overlay>
          </StyledLink>
        </StyledBackground>
  
        <StyledText>
          <AniLink 
            fade 
            to={slug}
            alt={title}
          >
            <StyledTitle>{title}</StyledTitle>
          </AniLink>
    
          {categories.slice(1, 2).map(category => (
            <StyledSubtitle>{category.name}</StyledSubtitle>
          ))}
        </StyledText>
      </motion.div>
    </StyledCol>
  )
}

export default FeatureGrid
