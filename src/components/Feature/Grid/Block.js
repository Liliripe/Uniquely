import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
  return (
    <StyledCol lg="3" key={slug}>
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
    </StyledCol>
  )
}

export default FeatureGrid
