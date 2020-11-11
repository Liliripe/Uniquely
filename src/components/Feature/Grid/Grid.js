import React from 'react'

import Block from './Block'

const Grid = ({ ...data }) => {
    return (
        <>
            {data.allWordpressWpDestinations.edges.slice(0, 2).map(destination => (
                <Block 
                    title={destination.node.title}
                    slug={destination.node.slug}
                    categories={destination.node.categories}
                    image={destination.node.featured_media.localFile.childImageSharp.fluid}
                />
            ))}
            {data.allWordpressPost.edges.slice(0, 2).map(post => (
                <Block 
                    title={post.node.title}
                    slug={post.node.slug}
                    categories={post.node.categories}
                    image={post.node.featured_media.localFile.childImageSharp.fluid}
                />
            ))}
        </>
    )
}

export default Grid
