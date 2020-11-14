import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Col from 'react-bootstrap/Col'

import { 
    Overlay, 
    StyledLink, 
    StyledImage, 
    StyledButton,
    StyledTitle, 
    StyledCategory 
} from './style'

const Block = ({ ...data }) => {
    return (
        <>
            {data.allWordpressPost.edges.slice(0, 4).map(post => (
                <Col md={3}>
                    <StyledImage
                        Tag="div"
                        fluid={post.node.featured_media.localFile.childImageSharp.fluid}
                    >
                        <StyledLink 
                            fade 
                            to={post.node.slug}
                            alt={post.node.title}
                        >
                            <Overlay>
                                <StyledButton>View Details</StyledButton>
                            </Overlay>
                        </StyledLink>
                    </StyledImage>
                    {post.node.categories.slice(0, 1).map(category => (
                        <StyledCategory>{category.name}</StyledCategory>
                    ))}
                    <AniLink
                        fade 
                        to={post.node.slug}
                        alt={post.node.title}
                    >
                        <h5>{post.node.title}</h5>
                    </AniLink>
                </Col>
            ))}
        </>
    )
}

export default Block
