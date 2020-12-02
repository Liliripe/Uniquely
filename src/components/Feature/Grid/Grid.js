import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Block from './Block'
import NoContent from './NoContent'
import { RowWrap } from './style'

const Grid = ({ ...data }) => {
    return (
        <>
            <Col xs={12} md={6}>
                <Row>
                    {data.allWordpressPost.edges.slice(0, 1).map(post => (
                        <Block 
                            xs={12}
                            hover
                            title={post.node.title}
                            slug={post.node.slug}
                            categories={post.node.categories}
                            excerpt={post.node.excerpt}
                            image={post.node.featured_media.localFile.childImageSharp.fluid}
                        />
                    ))}
                </Row>
            </Col>
            <Col xs={12} md={6}>
                <RowWrap>
                    {data.allWordpressPost.edges.slice(1, 3).map.length > 1 ? (post => (
                        <Block 
                            xs={6}
                            md={6}
                            title={post.node.title}
                            slug={post.node.slug}
                            categories={post.node.categories}
                            image={post.node.featured_media.localFile.childImageSharp.fluid}
                        />
                    )) :
                        <NoContent xs={6} md={6} />
                    }
                </RowWrap>
            </Col>
        </>
    )
}

export default Grid
